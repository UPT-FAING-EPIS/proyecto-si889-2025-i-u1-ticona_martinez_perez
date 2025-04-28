# app/services/user_service.py
from uuid import UUID, uuid4
from datetime import datetime, timedelta
from typing import Optional
from passlib.context import CryptContext
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models import db_models as models
from app.schemas.user_schemas import UserCreate, UserLogin, TokenData

from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from app.db.session import get_db


SECRET_KEY = "supersecretkey"  # Cambiar por env var
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/login")  # importantísimo

def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def create_user(db: Session, user_data: UserCreate) -> models.User:
    # 1. Verificar si el email ya existe
    existing_email = db.query(models.User).filter(
        models.User.email == user_data.email
    ).first()
    
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El email ya está registrado"
        )

    # 2. Verificar si el username ya existe
    existing_username = db.query(models.User).filter(
        models.User.username == user_data.username
    ).first()
    
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El nombre de usuario ya está en uso"
        )

    # 3. Crear el usuario si todo está bien
    try:
        db_user = models.User(
            id=uuid4(),
            username=user_data.username,
            email=user_data.email,
            hashed_password=hash_password(user_data.password),
            role="user",
            is_active=True,  # Añadido por seguridad
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
        
    except Exception as e:
        db.rollback()  # Revertir cambios en caso de error
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al crear el usuario: {str(e)}"
        )


def authenticate_user(db: Session, email: str, password: str) -> Optional[models.User]:
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        return None
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str) -> TokenData:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        role: str = payload.get("role")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Token inválido")
        return TokenData(user_id=UUID(user_id), role=role)
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido")
    

def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)) -> models.User:
    token_data = decode_access_token(token)  # decodifica el JWT
    user = db.query(models.User).filter(models.User.id == token_data.user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user
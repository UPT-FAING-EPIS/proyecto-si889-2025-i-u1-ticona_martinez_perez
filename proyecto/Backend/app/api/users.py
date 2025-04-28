# app/api/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta

from app.db.session import get_db
from app.schemas.user_schemas import UserCreate, Token, UserProfileResponse
from app.services import user_service
from app.models import db_models  # Importa los modelos directamente
from app.core.config import settings  # Importa la configuración

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/register", response_model=Token)
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    try:
        user = user_service.create_user(db, user_data)
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        token = user_service.create_access_token(
            data={"sub": str(user.id), "role": user.role},
            expires_delta=access_token_expires
        )
        return {"access_token": token, "token_type": "bearer"}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error interno al registrar usuario"
        )

@router.post("/login", response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = user_service.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales incorrectas",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    token = user_service.create_access_token(
        data={"sub": str(user.id), "role": user.role},
        expires_delta=access_token_expires
    )
    
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me", response_model=UserProfileResponse)
async def get_user_profile(
    current_user: db_models.User = Depends(user_service.get_current_user)
):
    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "role": current_user.role,
        "is_active": current_user.is_active,  # <- Añadido
        "created_at": current_user.created_at,
        "updated_at": current_user.updated_at  # <- Añadido
    }

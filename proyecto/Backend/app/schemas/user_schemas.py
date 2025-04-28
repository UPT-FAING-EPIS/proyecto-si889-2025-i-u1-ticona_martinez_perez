# app/schemas/user_schemas.py
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID
from datetime import datetime
from enum import Enum
from typing import Optional

class UserRole(str, Enum):
    guest = "guest"
    user = "user"
    admin = "admin"

class UserBase(BaseModel):
    username: str = Field(..., example="johndoe")
    email: EmailStr = Field(..., example="johndoe@example.com")

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserResponse(UserBase):
    id: UUID
    role: UserRole
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[UUID] = None
    role: Optional[UserRole] = None

class UserUpdate(BaseModel):
    username: Optional[str] = Field(None, example="newusername")
    email: Optional[EmailStr] = Field(None, example="newemail@example.com")
    password: Optional[str] = Field(None, min_length=8)

class UserProfileResponse(UserResponse):
    pass  # Puedes añadir campos adicionales si necesitas
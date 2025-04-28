from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "tu-clave-secreta-aqui"  # Cambia esto y usa variables de entorno en producción
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 1 semana por defecto

settings = Settings()
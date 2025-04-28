# init_db.py
from app.models import db_models
from app.db.session import engine

print("Creando tablas...")
db_models.Base.metadata.create_all(bind=engine)
print("¡Listo!")

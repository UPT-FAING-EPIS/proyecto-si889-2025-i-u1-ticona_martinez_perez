# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import users, diagram, collaboration, comment, version

app = FastAPI(title="Plataforma UML API")

# CORS para frontend local o externo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers registrados
app.include_router(users.router)
app.include_router(diagram.router)
app.include_router(collaboration.router)
app.include_router(comment.router)
app.include_router(version.router)


@app.get("/")
def read_root():
    return {"message": "Bienvenido a la API de generación UML"}

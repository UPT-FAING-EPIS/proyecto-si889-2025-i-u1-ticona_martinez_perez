# app/services/collaboration_service.py
from uuid import UUID
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models import db_models as models


def add_collaborator(db: Session, diagram_id: UUID, user_id: UUID) -> models.Diagram:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    user = db.query(models.User).filter(models.User.id == user_id).first()

    if not diagram or not user:
        raise HTTPException(status_code=404, detail="Diagrama o Usuario no encontrado")

    if user in diagram.collaborators:
        raise HTTPException(status_code=400, detail="Usuario ya es colaborador")

    diagram.collaborators.append(user)
    db.commit()
    db.refresh(diagram)
    return diagram


def remove_collaborator(db: Session, diagram_id: UUID, user_id: UUID) -> models.Diagram:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    user = db.query(models.User).filter(models.User.id == user_id).first()

    if not diagram or not user:
        raise HTTPException(status_code=404, detail="Diagrama o Usuario no encontrado")

    if user not in diagram.collaborators:
        raise HTTPException(status_code=400, detail="Usuario no es colaborador")

    diagram.collaborators.remove(user)
    db.commit()
    db.refresh(diagram)
    return diagram


def list_collaborators(db: Session, diagram_id: UUID) -> list:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")
    return diagram.collaborators

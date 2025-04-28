# app/services/version_service.py
from uuid import UUID, uuid4
from datetime import datetime
from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models import db_models as models


def save_diagram_version(db: Session, diagram_id: UUID, snapshot: str) -> models.DiagramVersion:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")

    version = models.DiagramVersion(
        id=uuid4(),
        diagram_id=diagram_id,
        snapshot=snapshot,
        created_at=datetime.utcnow()
    )
    db.add(version)
    db.commit()
    db.refresh(version)
    return version


def list_versions(db: Session, diagram_id: UUID) -> list:
    return db.query(models.DiagramVersion).filter(models.DiagramVersion.diagram_id == diagram_id).all()


def restore_version(db: Session, diagram_id: UUID, version_id: UUID) -> bool:
    version = db.query(models.DiagramVersion).filter(models.DiagramVersion.id == version_id).first()
    if not version:
        return False

    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        return False

    diagram.plantuml_code = version.snapshot
    diagram.updated_at = datetime.utcnow()
    db.commit()
    return True

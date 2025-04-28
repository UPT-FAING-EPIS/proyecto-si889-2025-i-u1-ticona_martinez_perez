# app/api/version.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID

from app.db.session import get_db
from app.services import version_service

router = APIRouter(prefix="/versions", tags=["Versions"])


@router.post("/{diagram_id}")
def save_version(diagram_id: UUID, snapshot: str, db: Session = Depends(get_db)):
    return version_service.save_diagram_version(db, diagram_id, snapshot)


@router.get("/{diagram_id}")
def list_versions(diagram_id: UUID, db: Session = Depends(get_db)):
    return version_service.list_versions(db, diagram_id)


@router.post("/restore/{diagram_id}/{version_id}")
def restore_version(diagram_id: UUID, version_id: UUID, db: Session = Depends(get_db)):
    success = version_service.restore_version(db, diagram_id, version_id)
    if not success:
        raise HTTPException(status_code=404, detail="Versión o diagrama no encontrado")
    return {"detail": "Versión restaurada exitosamente"}

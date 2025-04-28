# app/api/diagram.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID

from app.db.session import get_db
from app.schemas.diagram_schemas import DiagramCreate, DiagramUpdate, DiagramResponse
from app.services import diagram_service, validation_service
from app.services.user_service import decode_access_token
from fastapi.security import OAuth2PasswordBearer

router = APIRouter(prefix="/diagrams", tags=["Diagrams"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/login")


def get_current_user_id(token: str = Depends(oauth2_scheme)) -> UUID:
    return decode_access_token(token).user_id


@router.post("/", response_model=DiagramResponse)
def create_diagram(
    diagram_data: DiagramCreate,
    db: Session = Depends(get_db),
    user_id: UUID = Depends(get_current_user_id)
):
    is_valid, message = validation_service.validate_source_code(
        diagram_data.language.value, diagram_data.source_code
    )
    if not is_valid:
        raise HTTPException(status_code=400, detail=message)

    return diagram_service.create_diagram(db, user_id, diagram_data)


@router.get("/{diagram_id}", response_model=DiagramResponse)
def get_diagram(diagram_id: UUID, db: Session = Depends(get_db)):
    diagram = diagram_service.get_diagram(db, diagram_id)
    if not diagram:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")
    return diagram


@router.put("/{diagram_id}", response_model=DiagramResponse)
def update_diagram(
    diagram_id: UUID,
    updates: DiagramUpdate,
    db: Session = Depends(get_db)
):
    updated = diagram_service.update_diagram(db, diagram_id, updates)
    if not updated:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")
    return updated


@router.delete("/{diagram_id}")
def delete_diagram(diagram_id: UUID, db: Session = Depends(get_db)):
    deleted = diagram_service.delete_diagram(db, diagram_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")
    return {"detail": "Eliminado correctamente"}

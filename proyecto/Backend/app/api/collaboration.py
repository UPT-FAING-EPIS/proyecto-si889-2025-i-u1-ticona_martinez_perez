# app/api/collaboration.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID

from app.db.session import get_db
from app.services import collaboration_service

router = APIRouter(prefix="/collaboration", tags=["Collaboration"])


@router.post("/add")
def add_collaborator(diagram_id: UUID, user_id: UUID, db: Session = Depends(get_db)):
    return collaboration_service.add_collaborator(db, diagram_id, user_id)


@router.post("/remove")
def remove_collaborator(diagram_id: UUID, user_id: UUID, db: Session = Depends(get_db)):
    return collaboration_service.remove_collaborator(db, diagram_id, user_id)


@router.get("/list/{diagram_id}")
def list_collaborators(diagram_id: UUID, db: Session = Depends(get_db)):
    return collaboration_service.list_collaborators(db, diagram_id)

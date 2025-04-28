# app/api/comment.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID

from app.db.session import get_db
from app.services import comment_service

router = APIRouter(prefix="/comments", tags=["Comments"])


@router.post("/")
def add_comment(diagram_id: UUID, author_id: UUID, text: str, target_element_id: UUID = None, db: Session = Depends(get_db)):
    return comment_service.add_comment(db, diagram_id, author_id, text, target_element_id)


@router.get("/{diagram_id}")
def get_comments(diagram_id: UUID, db: Session = Depends(get_db)):
    return comment_service.list_comments(db, diagram_id)


@router.delete("/{comment_id}")
def delete_comment(comment_id: UUID, db: Session = Depends(get_db)):
    success = comment_service.delete_comment(db, comment_id)
    if not success:
        raise HTTPException(status_code=404, detail="Comentario no encontrado")
    return {"detail": "Comentario eliminado"}

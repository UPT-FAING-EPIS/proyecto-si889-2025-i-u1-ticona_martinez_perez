# app/services/comment_service.py
from uuid import UUID, uuid4
from datetime import datetime
from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models import db_models as models


def add_comment(db: Session, diagram_id: UUID, author_id: UUID, text: str, target_element_id: UUID = None) -> models.Comment:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        raise HTTPException(status_code=404, detail="Diagrama no encontrado")

    comment = models.Comment(
        id=uuid4(),
        diagram_id=diagram_id,
        author_id=author_id,
        text=text,
        target_element_id=target_element_id,
        created_at=datetime.utcnow()
    )
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


def list_comments(db: Session, diagram_id: UUID) -> list:
    return db.query(models.Comment).filter(models.Comment.diagram_id == diagram_id).all()


def delete_comment(db: Session, comment_id: UUID) -> bool:
    comment = db.query(models.Comment).filter(models.Comment.id == comment_id).first()
    if not comment:
        return False
    db.delete(comment)
    db.commit()
    return True

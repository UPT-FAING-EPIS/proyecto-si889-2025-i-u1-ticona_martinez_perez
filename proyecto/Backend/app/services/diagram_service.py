# app/services/diagram_service.py
from uuid import UUID, uuid4
from datetime import datetime
from typing import List, Optional
from sqlalchemy.orm import Session

from app.models import db_models as models
from app.schemas.diagram_schemas import DiagramCreate, DiagramUpdate
from app.utils.uml_generator import convert_code_to_plantuml


def create_diagram(db: Session, owner_id: UUID, diagram_data: DiagramCreate) -> models.Diagram:
    plantuml_code = convert_code_to_plantuml(diagram_data.source_code, diagram_data.language, diagram_data.type)

    diagram = models.Diagram(
        id=uuid4(),
        owner_id=owner_id,
        name=diagram_data.name,
        type=diagram_data.type,
        language=diagram_data.language,
        source_code=diagram_data.source_code,
        plantuml_code=plantuml_code,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )
    db.add(diagram)
    db.commit()
    db.refresh(diagram)
    return diagram


def get_diagram(db: Session, diagram_id: UUID) -> Optional[models.Diagram]:
    return db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()


def update_diagram(db: Session, diagram_id: UUID, updates: DiagramUpdate) -> Optional[models.Diagram]:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        return None

    if updates.name is not None:
        diagram.name = updates.name
    if updates.type is not None:
        diagram.type = updates.type
    if updates.language is not None:
        diagram.language = updates.language
    if updates.source_code is not None:
        diagram.source_code = updates.source_code
        diagram.plantuml_code = convert_code_to_plantuml(updates.source_code, diagram.language, diagram.type)
    if updates.plantuml_code is not None:
        diagram.plantuml_code = updates.plantuml_code

    diagram.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(diagram)
    return diagram


def delete_diagram(db: Session, diagram_id: UUID) -> bool:
    diagram = db.query(models.Diagram).filter(models.Diagram.id == diagram_id).first()
    if not diagram:
        return False

    db.delete(diagram)
    db.commit()
    return True

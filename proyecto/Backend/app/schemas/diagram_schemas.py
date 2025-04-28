# app/schemas/diagram_schemas.py
from pydantic import BaseModel, Field
from uuid import UUID
from datetime import datetime
from enum import Enum
from typing import List, Optional


class DiagramType(str, Enum):
    class_diagram = "class"
    sequence_diagram = "sequence"
    use_case_diagram = "use_case"
    component_diagram = "component"


class ProgrammingLanguage(str, Enum):
    python = "python"
    java = "java"
    csharp = "csharp"
    php = "php"


class DiagramElementSchema(BaseModel):
    id: UUID
    type: str
    content: str
    meta: Optional[dict] = None


class CommentSchema(BaseModel):
    id: UUID
    author_id: UUID
    text: str
    target_element_id: Optional[UUID] = None
    created_at: datetime


class DiagramVersionSchema(BaseModel):
    id: UUID
    created_at: datetime
    snapshot: str


class DiagramBase(BaseModel):
    name: str
    type: DiagramType
    language: ProgrammingLanguage
    source_code: Optional[str] = None


class DiagramCreate(DiagramBase):
    pass


class DiagramUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[DiagramType] = None
    language: Optional[ProgrammingLanguage] = None
    source_code: Optional[str] = None
    plantuml_code: Optional[str] = None


class DiagramResponse(DiagramBase):
    id: UUID
    owner_id: UUID
    plantuml_code: Optional[str]
    created_at: datetime
    updated_at: datetime
    collaborators: List[UUID]
    elements: List[DiagramElementSchema] = []
    comments: List[CommentSchema] = []
    versions: List[DiagramVersionSchema] = []

    # class Config:
    #     orm_mode = True

    class Config:
        from_attributes = True  # ← Nuevo en Pydantic V2

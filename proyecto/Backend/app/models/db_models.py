# app/models/db_models.py
from datetime import datetime
from typing import List, Optional
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Enum as SqlEnum, Table
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship, declarative_base
import enum
import uuid
from sqlalchemy import Boolean

Base = declarative_base()

class DiagramType(str, enum.Enum):
    class_diagram = "class"
    sequence_diagram = "sequence"
    use_case_diagram = "use_case"
    component_diagram = "component"

class ProgrammingLanguage(str, enum.Enum):
    python = "python"
    java = "java"
    csharp = "csharp"
    php = "php"

# Many-to-Many user <-> diagram
diagram_collaborators = Table(
    'diagram_collaborators', Base.metadata,
    Column('user_id', UUID(as_uuid=True), ForeignKey('users.id')),
    Column('diagram_id', UUID(as_uuid=True), ForeignKey('diagrams.id'))
)

class User(Base):
    __tablename__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="user")
    is_active = Column(Boolean, default=True)  # <-- Corrección aquí
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)


class Diagram(Base):
    __tablename__ = 'diagrams'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    owner_id = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    type = Column(SqlEnum(DiagramType), nullable=False)
    language = Column(SqlEnum(ProgrammingLanguage), nullable=False)
    source_code = Column(Text, nullable=True)
    plantuml_code = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
    elements = relationship("DiagramElement", back_populates="diagram")
    collaborators = relationship("User", secondary=diagram_collaborators)
    comments = relationship("Comment", back_populates="diagram")
    versions = relationship("DiagramVersion", back_populates="diagram")

class DiagramElement(Base):
    __tablename__ = 'diagram_elements'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    diagram_id = Column(UUID(as_uuid=True), ForeignKey('diagrams.id'))
    type = Column(String, nullable=False)
    content = Column(Text)
    meta = Column(Text, nullable=True)
    diagram = relationship("Diagram", back_populates="elements")

class DiagramVersion(Base):
    __tablename__ = 'diagram_versions'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    diagram_id = Column(UUID(as_uuid=True), ForeignKey('diagrams.id'))
    created_at = Column(DateTime, default=datetime.utcnow)
    snapshot = Column(Text)
    diagram = relationship("Diagram", back_populates="versions")

class Comment(Base):
    __tablename__ = 'comments'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    diagram_id = Column(UUID(as_uuid=True), ForeignKey('diagrams.id'))
    author_id = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    text = Column(Text)
    target_element_id = Column(UUID(as_uuid=True), ForeignKey('diagram_elements.id'), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    diagram = relationship("Diagram", back_populates="comments")

from pydantic import BaseModel
from typing import Optional


class Todo(BaseModel):
    """A Todo item model."""
    id: Optional[int] = None
    title: str
    completed: bool = False


class TodoCreate(BaseModel):
    """Payload to create a Todo."""
    title: str


class TodoUpdate(BaseModel):
    """Payload to update a Todo."""
    title: Optional[str] = None
    completed: Optional[bool] = None

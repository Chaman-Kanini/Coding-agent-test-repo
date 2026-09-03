from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi import status
from typing import List

from .schemas import Todo, TodoCreate, TodoUpdate
from .store import default_store

app = FastAPI()

# Allow local frontend (vite/dev server) to talk to this API during development/tests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/todos", response_model=List[Todo])
def list_todos():
    return default_store.list_todos()


@app.post("/todos", response_model=Todo, status_code=status.HTTP_201_CREATED)
def create_todo(payload: TodoCreate):
    created = default_store.create_todo(payload.dict())
    return created


@app.put("/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, payload: TodoUpdate):
    updated = default_store.update_todo(todo_id, payload.dict())
    if updated is None:
        raise HTTPException(status_code=404, detail="todo not found")
    return updated


@app.delete("/todos/{todo_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(todo_id: int):
    deleted = default_store.delete_todo(todo_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="todo not found")
    return None


from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional


@dataclass
class InMemoryStore:
    """A simple in-memory store for todos used during testing/runtime.

    Todos are stored as dicts with keys: id (int), title (str), completed (bool).
    """
    _todos: Dict[int, Dict[str, Any]] = field(default_factory=dict)
    _next_id: int = 1

    def list_todos(self) -> List[Dict[str, Any]]:
        """Return all todos as a list."""
        return list(self._todos.values())

    def create_todo(self, todo_data: Dict[str, Any]) -> Dict[str, Any]:
        """Create a todo and return the created representation."""
        todo_id = self._next_id
        self._next_id += 1
        todo = {
            "id": todo_id,
            "title": todo_data.get("title", ""),
            "completed": bool(todo_data.get("completed", False)),
        }
        self._todos[todo_id] = todo
        return todo

    def update_todo(self, todo_id: int, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Update fields of an existing todo. Returns the updated todo or None if not found."""
        if todo_id not in self._todos:
            return None
        todo = self._todos[todo_id]
        if "title" in data and data["title"] is not None:
            todo["title"] = data["title"]
        if "completed" in data and data["completed"] is not None:
            todo["completed"] = bool(data["completed"])
        self._todos[todo_id] = todo
        return todo

    def delete_todo(self, todo_id: int) -> bool:
        """Delete a todo by id. Returns True if deleted, False if not found."""
        return self._todos.pop(todo_id, None) is not None


# A module-level default store instance.
default_store = InMemoryStore()

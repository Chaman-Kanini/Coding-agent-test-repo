# Todo App (React + FastAPI)

This repository provides a simple Todo application composed of:

- backend/: a FastAPI backend exposing a minimal CRUD API for todos
- frontend/: a Vite + React frontend that consumes the API

Backend

- Start a development server: uvicorn backend.main:app --reload --port 8000
- Endpoints:
  - GET /todos -> list of todos
  - POST /todos {title: str} -> 201 created with todo {id,title,completed}
  - PUT /todos/{id} {title?:str, completed?:bool} -> 200 updated todo
  - DELETE /todos/{id} -> 204 no content

Frontend

- From frontend/ run: npm install && npm run dev (Vite) to start dev server (default port 5173)
- The frontend expects the API at http://localhost:8000 during development.

Testing

- Run pytest to execute backend tests that use FastAPI's TestClient against the app.


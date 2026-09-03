from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_todos_crud():
    # Create a todo
    create_resp = client.post("/todos", json={"title": "Buy milk"})
    assert create_resp.status_code == 201, f"expected 201 CREATED, got {create_resp.status_code}: {create_resp.text}"
    created = create_resp.json()
    assert "id" in created, "created todo must include an id"
    assert created.get("title") == "Buy milk"
    # By contract a new todo is not completed
    assert created.get("completed") is False

    todo_id = created["id"]

    # List todos and ensure the created one appears
    list_resp = client.get("/todos")
    assert list_resp.status_code == 200, f"expected 200 OK, got {list_resp.status_code}: {list_resp.text}"
    todos = list_resp.json()
    assert any(t.get("id") == todo_id for t in todos), "created todo must appear in GET /todos"

    # Update the todo
    update_payload = {"title": "Buy eggs", "completed": True}
    update_resp = client.put(f"/todos/{todo_id}", json=update_payload)
    assert update_resp.status_code == 200, f"expected 200 OK on update, got {update_resp.status_code}: {update_resp.text}"
    updated = update_resp.json()
    assert updated.get("id") == todo_id
    assert updated.get("title") == "Buy eggs"
    assert updated.get("completed") is True

    # Delete the todo
    delete_resp = client.delete(f"/todos/{todo_id}")
    # Typical REST delete returns 204 No Content
    assert delete_resp.status_code == 204, f"expected 204 NO CONTENT on delete, got {delete_resp.status_code}: {delete_resp.text}"

    # Ensure the todo no longer appears in the list
    final_list_resp = client.get("/todos")
    assert final_list_resp.status_code == 200, f"expected 200 OK, got {final_list_resp.status_code}: {final_list_resp.text}"
    final_todos = final_list_resp.json()
    assert all(t.get("id") != todo_id for t in final_todos), "deleted todo must not appear in GET /todos"

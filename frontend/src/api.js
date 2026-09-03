const API_BASE = 'http://localhost:8000'

export async function listTodos(){
  const resp = await fetch(`${API_BASE}/todos`)
  return resp.json()
}

export async function createTodo(payload){
  const resp = await fetch(`${API_BASE}/todos`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
  return resp.json()
}

export async function updateTodo(id, payload){
  const resp = await fetch(`${API_BASE}/todos/${id}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
  return resp.json()
}

export async function deleteTodo(id){
  await fetch(`${API_BASE}/todos/${id}`, {method:'DELETE'})
}

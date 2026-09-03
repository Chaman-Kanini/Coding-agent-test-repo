import React, {useEffect, useState} from 'react'
import * as api from './api'

export default function App(){
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    api.listTodos().then(setTodos)
  },[])

  async function add(e){
    e.preventDefault()
    if(!title) return
    const created = await api.createTodo({title})
    setTodos(prev=>[...prev, created])
    setTitle('')
  }

  async function toggle(id){
    const t = todos.find(x=>x.id===id)
    const updated = await api.updateTodo(id, {completed: !t.completed})
    setTodos(prev=>prev.map(p=>p.id===id?updated:p))
  }

  async function remove(id){
    await api.deleteTodo(id)
    setTodos(prev=>prev.filter(p=>p.id!==id))
  }

  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>Todos</h1>
      <form onSubmit={add}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(t=> (
          <li key={t.id} style={{textDecoration: t.completed? 'line-through':''}}>
            <input type="checkbox" checked={!!t.completed} onChange={()=>toggle(t.id)} />
            {t.title}
            <button onClick={()=>remove(t.id)} style={{marginLeft:8}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

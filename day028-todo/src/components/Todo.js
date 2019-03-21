import React from 'react'
import './Todo.css'

export default function Todo(props) {
  let completed = props.todo.completed
  const styles = { textDecoration: "line-through"}
  
  return (
    <div className="list-item">
      <input type="checkbox" checked={completed} onChange={() => props.handleChange(props.todo.id)}/> 
      <span className="item-title" style={completed ? styles : {}}>{props.todo.title}</span>
      <button className="delete-item btn" onClick={() => props.handleDelete(props.todo.id)}>X</button>
    </div>
  )
}


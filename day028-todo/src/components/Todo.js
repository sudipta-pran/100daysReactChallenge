import React from 'react'

export default function Todo(props) {
  let completed = props.todo.completed
  const styles = { textDecoration: "line-through"}
  
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => props.handleChange(props.todo.id)}/> 
      <span style={completed ? styles : {}}>{props.todo.title}</span>
    </div>
  )
}


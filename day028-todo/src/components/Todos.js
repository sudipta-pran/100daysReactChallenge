import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    const todosList = props.todos.map(todo => <Todo todo={todo} />)
  return (    
    <div>        
      {todosList}
    </div>
  )
}

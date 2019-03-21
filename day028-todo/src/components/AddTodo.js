import React from 'react'
import './AddTodo.css'



export default function AddTodo(props) {
    
    let newTodo = ''
    function onChange(e){
        newTodo = e.target.value
    }

    function handleSubmit(){
        if(newTodo !== '')
        props.handleAdd(newTodo)
        
    }
  return (
    <div className="Form">
      <h3>Add New:</h3>
      <input id="add" type="text" onChange={onChange} placeholder="Add new Todo" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

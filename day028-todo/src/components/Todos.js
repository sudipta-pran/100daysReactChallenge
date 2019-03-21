import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import {fetchTodos, updateTodo, deleteTodo, addTodo} from '../actions/todoActions'

class Todos extends Component {
  componentWillMount(){
    this.props.fetchTodos()
  }

  handleChange = (id) => {
    this.props.updateTodo(id)
  } 

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  } 
  
  handleAdd = (newTodo) => {
    console.log("New", newTodo)
    this.props.addTodo(newTodo)
  }
       
  render() {
    const todosList = this.props.todos.map(todo => <div key={todo.id}><Todo todo={todo}
      handleDelete={this.handleDelete} handleChange={this.handleChange}/></div>)
    return (    
      <div>
        <AddTodo handleAdd={this.handleAdd}/>        
        {todosList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, {fetchTodos, updateTodo, deleteTodo, addTodo})(Todos)


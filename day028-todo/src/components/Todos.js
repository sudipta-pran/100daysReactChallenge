import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {fetchTodos, updateTodo} from '../actions/todoActions'

class Todos extends Component {
  componentWillMount(){
    this.props.fetchTodos()
  }

  handleChange = (id) => {
    console.log("clicked: ", id)
    this.props.updateTodo(id)
  } 
  
       
  render() {
    const todosList = this.props.todos.map(todo => <div key={todo.id}><Todo todo={todo} handleChange={this.handleChange}/></div>)
    return (    
      <div>        
        {todosList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, {fetchTodos, updateTodo})(Todos)


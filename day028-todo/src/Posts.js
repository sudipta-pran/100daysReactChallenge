import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {      
      componentWillMount(){
        this.props.fetchTodos()
      }
    
      render() {
        let items
        if(this.props.todos !== []){
          items = this.props.todos.map(todo => <li key={todo.id}>
              <h1>{todo.title}</h1>
              <br/>
              <p>{todo.completed ? "Done" : "Not Done"}</p>
            </li>)
        }else{
          items = <p>Nothing Todo</p>
        }
        return (
            <ul className="postList">
              {items}
            </ul>
        );
      }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export const fetchTodos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => dispatch({
              type: "FETCH_POSTS",
              payload:data
          }))
}

export default connect(mapStateToProps, {fetchTodos})(Posts)

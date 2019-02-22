import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({
        posts:data
      }))
  }

  render() {
    let items
    if(this.state.posts !== []){
      items = this.state.posts.map(post => <li>
          <h1>{post.title}</h1>
          <br/>
          <p>{post.body}</p>
        </li>)
    }else{
      items = <p>No posts</p>
    }
    return (
      <div className="App">
        <ul className="postList">
          {items}
        </ul>
      </div>
    );
  }
}

export default App;

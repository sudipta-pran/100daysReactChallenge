import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    //fetch from express API
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => this.setState({
        posts: data
      }))
  }

  render() {
    let items
    if(this.state.posts !== []){
      items = this.state.posts.map(post => <li key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </li>)
    } else {
      items = 'No posts available'
    }
    return (
      <div className="App">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;

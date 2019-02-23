import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      subredits: []
    }
  }

  componentDidMount(){
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(response => response.data.children)
      .then(data => this.setState({
        subredits:data
      }))
  }

  render() {
    let items
    if(this.state.subredits !== []){
      items = this.state.subredits.map(post => {
        let d = new Date(post.data.created_utc * 1000);
        let all = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()
        return <li className="jumbotron">
          <h1>{post.data.title}</h1>          
          <small>Author: {post.data.author_fullname}</small> || <small>Posted on: {all}</small><br/>
          <p>{post.data.selftext}</p>
          <a className="btn btn-primary" href={'https://www.reddit.com'+post.data.permalink}>Read More</a>
        </li>
      })
    }else{
      items = <p>No subredits</p>
    }
    return (
      <div className="App container">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;

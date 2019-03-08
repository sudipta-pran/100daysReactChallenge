import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {      
      componentWillMount(){
        this.props.fetchPosts()
      }
    
      render() {
        let items
        if(this.props.posts !== []){
          items = this.props.posts.map(post => <li key={post.id}>
              <h1>{post.title}</h1>
              <br/>
              <p>{post.body}</p>
            </li>)
        }else{
          items = <p>No posts</p>
        }
        return (
            <ul className="postList">
              {items}
            </ul>
        );
      }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => dispatch({
              type: "FETCH_POSTS",
              payload:data
          }))
}

export default connect(mapStateToProps, {fetchPosts})(Posts)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }

  render() {
    const posts = this.props.posts.reverse()
    let items = posts.map(post => <li key={post._id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </li>)
    
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPosts} )(Posts)

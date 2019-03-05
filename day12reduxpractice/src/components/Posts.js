import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'

 class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }

  render() {
    console.log(this.props.posts)
    console.log(this.props.newPost)
    const posts = this.props.posts.reverse()

    if(this.props.newPost){
      posts.unshift(this.props.newPost)
    }

    let items = posts.map(post => <li key={post.title}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </li>)
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.newPost
})

export default connect(mapStateToProps, { fetchPosts })(Posts)

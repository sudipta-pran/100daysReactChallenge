import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }
  render() {
    const posts = this.props.posts.map(post => <li key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </li>)
    if(this.props.newPost){
        let newPost = <li key={this.props.newPost.id}>
            <h1>{this.props.newPost.title}</h1>
        <p>{this.props.newPost.body}</p>
        </li>
        posts.unshift(newPost)
    }
    return (
      <div>
          <ul>
            {posts}
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
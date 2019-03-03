import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchPosts } from "../actions/postActions"

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }
    render() {
        console.log(this.props)
        if(this.props.newPost){
            this.props.posts.unshift(this.props.newPost)
        }
        const posts = this.props.posts.map(post => <li key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </li>)
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
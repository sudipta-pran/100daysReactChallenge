import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class Form extends Component {
    state = {
        title: '',
        body: ''
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.addPost(post)
    }

    render() {
        return (
            <div className="form">
                <h2>Add New Post</h2>
                <input type="text" name="title" placeholder="Post Title" onChange={this.handleChange} value={this.state.title}/><br/>
                <input type="text" name="body" placeholder="Post Body" onChange={this.handleChange} value={this.state.body}/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
  
export default connect(null, {addPost} )(Form)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class Form extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addPost(this.state)
    }

    render() {    
        return (
            <div>
                <h1>Add NEw Post</h1>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} /><br/>
                <textarea name="body" onChange={this.handleChange} value={this.state.body} /><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
  }
}

export default connect(null, { addPost })(Form)
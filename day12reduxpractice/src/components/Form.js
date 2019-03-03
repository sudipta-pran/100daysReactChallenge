import React, { Component } from 'react'
import { connect } from "react-redux"
import { addPosts } from "../actions/postActions"

class Form extends Component {
    state = {
        title:'',
        body:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        this.props.addPosts(this.state)
    }

    render() {
        return (
        <div>
            <input name="title" onChange={this.handleChange} value={this.state.title}/><br/>
            <input name="body" onChange={this.handleChange} value={this.state.body}/><br/>
            <button onClick={this.handleClick}>Submit</button>
        </div>
        )
    }
}

export default connect(null, { addPosts })(Form)

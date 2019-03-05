import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class Form extends Component {
  state = {
      title: "",
      body: ""
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
        <input name="title" onChange={this.handleChange} value={this.state.title} />
        <input name="body" onChange={this.handleChange} value={this.state.body} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default connect(null, {addPost})(Form)
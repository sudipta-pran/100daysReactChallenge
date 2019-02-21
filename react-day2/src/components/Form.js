import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    // handleSubmit = () => {

    // }
    render() {
        return (
            <div>
                <h1>Enter Your Name</h1>
                <input value={this.state.name} onChange={this.handleInput}/><br/>
                <button onClick={() => this.props.clickFunc(this.state.name)}>Login</button>
            </div>
        );
    }
}

export default Form
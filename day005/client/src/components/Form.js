import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        }) 
    }
    handleBody = (e) => {
        this.setState({
            body: e.target.value
        }) 
    }
    handleSubmit = () => {
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then( () => {
                this.setState({
                    title:'',
                    body:''
                })
                this.props.propFunction()
        })
    }
    render() {
        return (
            <div className="form">
                <h2>Add New Post</h2>
                <input type="text" placeholder="Post Title" onChange={this.handleTitle} value={this.state.title}/><br/>
                <input type="text" placeholder="Post Body" onChange={this.handleBody} value={this.state.body}/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Form;
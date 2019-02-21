import React, { Component } from 'react'
import Form from './components/Form'
import Greet from './components/Greet'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      greet:false,
      name:''
    }
  }
  handleGreeting = (name) => {
    this.setState({
      greet: true,
      name
    })
  }
  render() {
    if(this.state.greet) {
      return (
        <div className="App">
          <Greet name={this.state.name}/>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Form clickFunc={this.handleGreeting}/> 
        </div>
      )
    }
    
  }
}

export default App;

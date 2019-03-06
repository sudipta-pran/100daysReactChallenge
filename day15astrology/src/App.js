import React, { Component } from 'react'
import { Provider } from "react-redux"
import store from './store'
import Form from './components/Form'
import Horoscope from './components/Horoscope'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form /><hr/>
          <Horoscope />
        </div>
      </Provider>      
    )
  }
}

export default App

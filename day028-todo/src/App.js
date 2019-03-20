import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Todo list</h1>
          <Todos/>
        </div>
      </Provider>
    );
  }
}

export default App;

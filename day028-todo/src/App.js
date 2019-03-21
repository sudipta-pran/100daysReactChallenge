import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <Provider store={store}>        
          <h1 className="heading">Todo list</h1>
          <div className="App">
            <Todos/>
          </div>
      </Provider>
    );
  }
}

export default App;

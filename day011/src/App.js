import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {store} from './store'
import './App.css';
import Posts from './components/Posts'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form /><hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

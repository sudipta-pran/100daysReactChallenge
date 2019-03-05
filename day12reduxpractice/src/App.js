import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import Posts from './components/Posts'
import Form from './components/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form /><br />
          <Posts />
        </div>
      </Provider>   
    );
  }
}

export default App;

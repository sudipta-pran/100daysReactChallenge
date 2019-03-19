import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './App.css';
import Posts from './Posts'

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
      case "FETCH_POSTS":
          return {
              ...state,
              todos: action.payload
          }
      default:
          return state
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;

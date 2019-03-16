import React, { Component } from 'react';
import Parent from './components/Parent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <img src="img/1.jpg" width="600" alt="lion1" />
          <img src="img/2.jpg" width="600" alt="lion2" />
          <img src="img/3.jpg" width="600" alt="lion3" />
        </Parent>
      </div>
    );
  }
}

export default App;

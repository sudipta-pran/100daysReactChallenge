import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>  
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
            </ul>  
          </nav>  
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;

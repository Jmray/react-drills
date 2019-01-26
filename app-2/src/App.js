import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      greetingsAndGoodbyes: ['hello','goodbye','seeyoulater','salutations']
    }
  }
  render() {
    return (
      <div className="App">
        <h4>{this.state.greetingsAndGoodbyes[0]}</h4>
        <h4>{this.state.greetingsAndGoodbyes[1]}</h4>
        <h4>{this.state.greetingsAndGoodbyes[2]}</h4>
        <h4>{this.state.greetingsAndGoodbyes[3]}</h4>

        
      </div>
    );
  }
}

export default App;

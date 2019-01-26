import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: '',
    }
  }
  render() {
    return (
      <div className="App">
        <input className='inputBox' onChange={event => this.handleInputChange(event.target.value)}/>
        <div className='displayBox'>{this.state.userInput}</div>
      </div>
    );
  }
  handleInputChange(value){
    this.setState({
      userInput: value,
    })
  }
}

export default App;

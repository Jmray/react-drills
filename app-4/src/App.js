import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      login: '',
      pass: '',
    }
  }
  render() {
    return (
      <div className="App">
        <input  onChange={event => this.handleLoginChange(event.target.value)}/>
        <input onChange={event => this.handlePassChange(event.target.value)}/>
        <button onClick={() => this.handleSubmit()}>Login</button>
      </div>
    );
  }
  handleLoginChange(value){
    this.setState({
      login: value,
    });
  }
  handlePassChange(value){
    this.setState({
      pass:value,
    });
  }
  handleSubmit(){
    alert(`Username: ${this.state.login} Password: ${this.state.pass}`);



  }
}

export default App;

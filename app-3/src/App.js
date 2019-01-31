import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      
      userInput: '',
      list:['pakistan', 'qatar', 'croatia', 'tuvalu', 'korea', 'canada', 'greenland']
    }
  }
  render() {
    let listToDisplay = this.state.list.filter( (element, index) => {
      return element.includes( this.state.userInput );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
      <input className='inputBox' value={this.userInput} onChange={event => this.handleChange(event.target.value)}/>
      {listToDisplay}
        
      </div>
    );
  }
  handleChange(value){
    this.setState({
      userInput: value,
    })
  }
  
  }


export default App;

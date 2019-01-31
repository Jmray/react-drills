import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {

  constructor(){
    super()

    this.state = {
      task: '',
      taskList: [],
    }
  }
  render() {
    return (
      <div className="App">
        <header><h1>My to do list</h1></header>
        <input value={this.state.task} onChange={event => this.handleChange(event.target.value)}/>
        <button onClick={() => this.handleAdd()}>Add</button>
        <Todo taskList={this.state.taskList}/>
      </div>
    );
  }
  handleChange(value){
    this.setState({task: value,})
  }
  handleAdd(){
    const {taskList} = this.state;

    taskList.push(this.state.task);
    this.setState({
      taskList,
    })
  }
}

export default App;

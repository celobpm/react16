import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27},
      ]
    })
  }

  onChangeNameHandler = (e, i) => {
    this.setState({})
  }
  render() {
    return (
      <div className="App">
        <h1> helloooooo </h1>
        <button className="MainButton" onClick={this.switchNameHandler.bind(this,'celo')}>Switch name</button>
        {this.state.persons.map((p, i) =>  
        <Person 
          name ={p.name} 
          age={p.age} 
          onClick = {() => this.switchNameHandler(p.name)}
          onChange = {this.onChangeNameHandler}
          id={i}

        />)}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1231,name: 'Max', age: 28},
      {id: 16353, name: 'Manu', age: 29},
      {id: 65123 ,name: 'Stephanie', age: 26},
    ],
    showPersons: false
  }


  onChangeNameHandler = (i, e) => {
    e.persist();
    this.setState(prev => {
      const person = {...prev.persons[i]};
      person.name = e.target.value;
      const persons = [...prev.persons];
      persons[i] = person
      return{persons}
    })
  }

  togglePersonsHandler = () => {
    this.setState(prev => {return {showPersons: !prev.showPersons}})
  }

  deletePersonHandler = (index) => {
    this.setState(prev => {
      const personsClone = [...prev.persons];
      personsClone.splice(index, 1);
      return{persons: personsClone};
    });
    
    
  }

  render() {

    let persons = null;
    if(!this.state.showPersons){
      persons = (
        <div>
          <p>where's everyone?</p>
        </div>
      )
    }
    else{
      persons = (
        <div>
          {this.state.persons.map((p, i) =>  
            <Person 
              name ={p.name} 
              age={p.age} 
              onClick = {this.deletePersonHandler.bind(this,i)}
              onChange = {this.onChangeNameHandler.bind(this,i)}
              id = {i} 
              key = {p.id}   
            />)}
        </div>
      )
    }
    return (
      <div className="App">
        <h1> helloooooo </h1>
        <button className="MainButton" onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/Person/PersonList';

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

    let buttonClass = "";
    if(!this.state.showPersons){
      buttonClass = "MainButton"
    }
    else{
      buttonClass = "MainButton Red"
    }
    return (
      <div className="App">
        <h1> helloooooo </h1>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle persons</button>
        <PersonList 
          persons = {this.state.persons} 
          showPersons= {this.state.showPersons}
          onChangeNameHandler = {this.onChangeNameHandler}
          deletePersonHandler = {this.deletePersonHandler}
        />
      </div>
    );
  }
}

export default App;

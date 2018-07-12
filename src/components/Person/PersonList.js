import React from 'react';
import './Person.css';
import Person from './Person';

const PersonList = (props) => {
	let personList = null
	if(props.showPersons){
		personList = props.persons.map((p, index) => 
            <Person 
              name ={p.name} 
              age={p.age} 
              key = {p.id}
              onClick = {props.deletePersonHandler.bind(this,index)}
              onChange = {props.onChangeNameHandler.bind(this,index)}
              id = {index} 
            />

		 )
	}
	else {
		personList = (
			<div>
			<p>where's everyone?</p>
			</div>)
	}
	return personList;
}

export default PersonList;
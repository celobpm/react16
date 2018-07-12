import React from 'react';
import './Person.css';

const person = (props) => {
	return(
		<div className = "Person">
			<p onClick={props.onClick}>helllo  {props.name} person {props.age} age</p>
			<p>{props.children}</p>
			<input type="text" onChange = {props.onChange} defaultValue = {props.name}/>
		</div>
		
	)
}

export default person;
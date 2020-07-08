import React from "react";
import personService from "../services/persons";

const PersonForm = (props) => {

    const addPerson = (event) => {
        event.preventDefault();
        const newPerson = { name: props.newName, number: props.newNumber };
        const existingPerson = props.persons.filter((p) => p.name.toUpperCase() === newPerson.name.toUpperCase());   
        //if the person doesn't exist, add them to the database (json-server)
        if (existingPerson.length === 0) {
            personService
                .create(newPerson)
                .then(resData => {
                    props.setPersons(props.persons.concat(resData));
                });
            props.setNewName("");
            props.setNewNumber("");         
        }
        //if name already exists, ask user if they want to replace the number
        else {
            if(window.confirm(`${props.newName} is already added to the phonebook, replace old number with new one?`)){
                personService
                    .editPerson(existingPerson[0].id, newPerson)
                    .then(editedPerson => {
                        props.setPersons(props.persons.map(p => p.id === editedPerson.id ? editedPerson : p));
                    });
            }
        }
    }

    return (
        <div>
            <h2>Add a New Person</h2>
            <form onSubmit={addPerson}>
                <div>Name: <input value={props.newName} onChange={props.handleName} /></div>
                <div>Number: <input value={props.newNumber} onChange={props.handleNumber} /></div>
                <div><button type="submit">Add Person</button></div>
            </form>
        </div>
    );
}


export default PersonForm;
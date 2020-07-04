import React from "react";

const PersonForm = (props) => {

    const addPerson = (event) => {
        event.preventDefault();
        const exists = props.persons.some((p) => p.name === props.newName);
        console.log(exists);
        if (!exists) {
            const newPerson = { name: props.newName, number: props.newNumber };
            props.setPersons(props.persons.concat(newPerson));
            props.setNewName("");
            props.setNewNumber("");
        }
        else {
            alert(`${props.newName} already exists!`);
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
import React from 'react';
import Person from './Person';
import personService from '../services/persons';


const Persons = (props) => {

    const personsToShow = props.persons.filter((p) => p.name.toUpperCase().includes(props.search.toUpperCase()));

    const onBtnDelete = (personToDelete) => {
        if (window.confirm(`Delete ${personToDelete.name}?`)) {
            personService.deletePerson(personToDelete.id)
                .then(response => {
                    const newPersons = props.persons.filter(p => p.id !== personToDelete.id);
                    props.setPersons(newPersons);
                })
        }
    }

    return (
        <ul>
            {personsToShow.map((p) => <Person key={p.name} person={p} onBtnDelete={onBtnDelete}/> )}
        </ul>
    )
}

export default Persons;
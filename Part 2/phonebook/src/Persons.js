import React from 'react';

const Persons = (props) => {

    const personsToShow = props.persons.filter((p) => p.name.toUpperCase().includes(props.search.toUpperCase()));

    return (
        <ul>
            {personsToShow.map((p) => <li key={p.number}>{p.name} {p.number}</li>)}
        </ul>
    )
}

export default Persons;
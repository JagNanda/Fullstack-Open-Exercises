import React from 'react';

const Person = ({person, onBtnDelete}) => {

    return (
        <li>
            {person.name} {person.number}
            <button onClick={() => onBtnDelete(person)}>Delete</button>
        </li>
    )
    
}

export default Person;
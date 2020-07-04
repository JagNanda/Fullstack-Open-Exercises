import React, { useState } from 'react';
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {

  const [persons, setPersons] = useState([
    { name: "Jag Nanda", number: "905-333-3333" },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Filter
        search={search}
        onChange={handleSearch}
      />
      <Persons
        persons={persons}
        search={search}
      />
    </div>
  );
}

export default App;

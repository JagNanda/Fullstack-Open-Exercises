import React, { useState, useEffect } from 'react';
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      });
  })

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

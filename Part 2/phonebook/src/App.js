import React, { useState, useEffect } from 'react';
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";
import Persons from "./Components/Persons";
import personService from "./services/persons";
import Notification from "./Components/Notification";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [messageStatus, setMessageStatus] = useState("");

  useEffect(() => {

      personService.getAll()
        .then((resData) => {
          setPersons(resData);
        });
  }, []);

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
      <Notification 
        statusMessage={statusMessage}
        messageStatus={messageStatus}  
      />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        setStatusMessage={setStatusMessage}
        setMessageStatus={setMessageStatus}
      />
      <h2>Numbers</h2>
      <Filter
        search={search}
        onChange={handleSearch}
      />
      <Persons
        persons={persons}
        search={search}
        setPersons={setPersons}
      />
      
    </div>
  );
}

export default App;

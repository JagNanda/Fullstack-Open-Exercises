import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from  './components/Countries';



const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [displayCountries, setDisplayCountries] = useState([]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
  }, []);

  return (
    <div>
      <Filter
        filter={filter}
        handleFilter={handleFilter}
      />
      <Countries
        countries={countries}
        filter={filter}
        displayCountries={displayCountries}
        setDisplayCountries={setDisplayCountries}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = ({ country }) => {

    const accessKey = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${accessKey}`)
            .then((response) => {
                setWeather(response.data);
            });
    }, [country.capital, accessKey]);

    return (
        <div>
            <h2>{country.name}</h2>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((l) =>
                    <li key={l.name}>{l.name}</li>
                )}
            </ul>
            <img
                src={country.flag}
                alt={country.name}
                width="300px"
            />
            <h3>Weather in {country.capital}</h3>

            {weather === null ? "" :
                <Weather weather={weather} />
            }
        </div>

    )
}

export default Country;
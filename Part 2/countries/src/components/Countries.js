import React from 'react';
import Country from './Country';

const Countries = ({ countries, filter, displayCountries, setDisplayCountries }) => {

    const filteredCountries = countries.filter((c) =>
        c.name.toUpperCase().includes(filter.toUpperCase())
    );

    //to show and hide country information
    const toggleCountryInfo = (country) => {

        if (!country.hasOwnProperty("shown")) {
            country.shown = true;
            setDisplayCountries(displayCountries.concat(country));
        }
        else {
            const shownCountries = [...displayCountries];
            if (country.shown) {
                shownCountries.forEach(sc => {
                    if (country.name === sc.name) {
                        sc.shown = false;
                    }
                });
            }
            else {
                shownCountries.forEach(sc => {
                    if (country.name === sc.name) {
                        sc.shown = true;
                    }
                });
            }

            setDisplayCountries(shownCountries);
        }
    }

    return (
        <div>
            <ul>
                {
                    filter.length > 0
                        ? filteredCountries.length > 10
                            ? "Too many matches. Specify another filter."
                            : filteredCountries.length === 1
                                ? <Country country={filteredCountries[0]} />
                                : filteredCountries.map((c) => <li key={c.name}>
                                    {c.name}
                                    <button onClick={() => toggleCountryInfo(c)}>{c.shown === true ? "Hide" : "Show"}</button>
                                    {c.shown === true
                                        ? <Country country={c} />
                                        : ""
                                    }
                                </li>)
                        : "Please type in a few characters to show a list of Countries."
                }
            </ul>
        </div>
    )
}

export default Countries;
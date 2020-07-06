import React from "react";

const Weather = ({ weather }) => {

    return (
        <div>
            {console.log(weather)}
            <strong>Temperature: {weather.main.temp}</strong>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"></img>
            <p><strong>Wind: {weather.wind.speed}</strong></p>
        </div>
    )
}

export default Weather;
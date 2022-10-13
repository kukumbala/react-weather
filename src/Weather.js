import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [currentWeather, setCurrentWeather] = useState({ ready: false });
  function handleResponse(response) {
    setCurrentWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (currentWeather.ready === true) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row  pb-4">
            <div className="col-5">
              <h1>{currentWeather.city}</h1>
            </div>
            <div className="col-7">
              <form>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Search for city"
                      className="form-control"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-search w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <span className="temperature">
                {Math.round(currentWeather.temperature)}
              </span>
              <span className="unit">°C</span>

              <FormattedDate date={currentWeather.date} />
            </div>
            <div className="col-2">
              <img src={currentWeather.icon} alt={currentWeather.description} />
            </div>
            <div className="col-4">
              <ul>
                <li>{currentWeather.description}</li>
                <li>Pressure {currentWeather.pressure}hPa</li>
                <li>Humidity {currentWeather.humidity}%</li>
                <li>Wind {currentWeather.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "dbfe710d4217359672738bda52809ad7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

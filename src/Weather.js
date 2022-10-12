import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState("false");
  let [currentTemperature, setCurrentTemperature] = useState("null");

  function handleResponse(response) {
    setCurrentTemperature(Math.round(response.data.main.temp));
    setReady("true");
  }
  if (ready === "true") {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row  pb-4">
            <div className="col-5">
              <h1>Zaporizhzhya</h1>
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
              <span className="temperature">{currentTemperature}</span>
              <span className="unit">°C</span>
              <ul>
                <li>Tuesday, October 11</li>
                <li>16:58</li>
              </ul>
            </div>
            <div className="col-2">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="cloudy"
              />
            </div>
            <div className="col-4">
              <ul>
                <li>Cloudy</li>
                <li>Pressure 1013hPa</li>
                <li>Humidity 44%</li>
                <li>Wind 3.53km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "dbfe710d4217359672738bda52809ad7";
    let city = `Zaporizhzhya`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

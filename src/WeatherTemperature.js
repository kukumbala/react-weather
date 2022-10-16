import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);
  function farenheit() {
    return props.celsius * 1.8 + 32;
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }
  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span>
        <span className="metric">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="unit">°F</span>
        <span className="metric">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
}

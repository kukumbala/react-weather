import React from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">
        <strong>{day()}</strong>
      </div>
      <div className="forecastIcon">
        <img src={iconUrl} alt={props.data.weather[0].description} width="80" />
      </div>
      <div className="temperatureMax">{Math.round(props.data.temp.max)}°C</div>
      <div className="temperatureMin">{Math.round(props.data.temp.min)}°C</div>
    </div>
  );
}

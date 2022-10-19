import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-4">
        <WeatherTemperature celsius={props.info.temperature} />
        <p>
          <FormattedDate date={props.info.date} />
        </p>
      </div>
      <div className="col-2">
        <img src={props.info.icon} alt={props.info.description} />
      </div>
      <div className="col-4">
        <ul>
          <li>{props.info.description}</li>
          <li>Pressure {props.info.pressure}hPa</li>
          <li>Humidity {props.info.humidity}%</li>
          <li>Wind {props.info.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}

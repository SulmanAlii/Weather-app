import React from "react";
import "../css/eu_europe.css";

function EU_Weather({ name, temperature, main, icon }) {
  return (
    <div className="each_city_weather">
      <div className="each_city">
        <h1>{name}</h1>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""/>
        <span>{Math.floor(temperature)}°C</span>
        <h3>{main}</h3>
      </div>
    </div>
  );
}

export default EU_Weather;

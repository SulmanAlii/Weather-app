import React, { useEffect, useState } from "react";
import weatherCity from "./config";
import axios from "axios";
import "../css/countryRow.css";
import EU_Weather from "./EU_Weather";
import AsiaWeather from "./AsiaWeather";
import SNWeather from "../Components/SNWeather";


function County_Row({ title }) {
  
  const [CityWeather, setCityWeather] = useState([]);
  const [CityWeather2, setCityWeather2] = useState([]);
  const [CityWeather3, setCityWeather3] = useState([]);

  const id_eu = [2800866,3202326,2618425,658225,2968815,2950158,264371,3054638,2267057,524894,3117735,2643743,323784,3143244,3169070,];
  const asia_id = [1162015,1138958,1185241,1816670,611717,1261481,1850147,285787,1733046,1871859,290030,108410,1880252,1609348,292968,];
  const other_id = [3435910,3925227,3688689,3652462,1687800,3646738,4276816,1687713,3489854,4167694,4140963,3553478];

  useEffect(() => {
    async function getData() {
      const d = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${id_eu}&appid=16b2c28ee3a3097b61466e9f6f8c5e08&units=metric`
      );
      const a = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${asia_id}&appid=16b2c28ee3a3097b61466e9f6f8c5e08&units=metric`
      );
      const na = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${other_id}&appid=16b2c28ee3a3097b61466e9f6f8c5e08&units=metric`
      );

      setCityWeather(d.data.list);
      setCityWeather2(a.data.list);
      setCityWeather3(na.data.list);

      return d, a, na;
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="euTitle">EUROPE</h1>
      <hr />
      <div className="weather">
        {CityWeather?.map((value) => {
          return [
            <EU_Weather
              name={value.name}
              temperature={value.main.temp}
              main={value.weather[0].main}
              icon={value.weather[0].icon}
            />];
        })}
      </div>
      <h1 className="euTitle">ASIA</h1>
      <hr />
      <div className="weather" style={{ display: "flex" }}>
        {CityWeather2.map((value) => {
          return (
            <AsiaWeather
              name={value.name}
              temperature={value.main.temp}
              main={value.weather[0].main}
              icon={value.weather[0].icon}
            />);
        })}
      </div>
      <h1 className="euTitle">North & South America</h1>
      <hr />
      <div className="weather" style={{ display: "flex" }}>
        {CityWeather3.map((value) => {
          return (
            <SNWeather
              name={value.name}
              temperature={value.main.temp}
              main={value.weather[0].main}
              icon={value.weather[0].icon}
            />);
        })}
      </div>
    </div>
  );
}

export default County_Row;

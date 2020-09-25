import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Body from "./Components/Country_Row";
import CityBySearch from "./Components/CityBySearch";

function App() {
  const [SearchCity, setSearchCity] = useState(" ");
  const [HideCities, setHideCities] = useState(true);
  const [Data, setData] = useState();

  const CityName = (e) => {
    setSearchCity(e.target.value);
  };

  //Button to get City data(weather)
  const getCity = () => {
    setHideCities(false);

    //GET WEATHER DATA WHEN USER WRITE SOME CITY NAME IN THE INPUT.

    if (SearchCity === " ") {
      alert("Write a city name!");
    } else {
      async function getCityWeather() {
        const url = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=16b2c28ee3a3097b61466e9f6f8c5e08&units=metric`
        );

        setData(url.data);
        setSearchCity(" ");

        return url;
      }

      getCityWeather();
    }
  };

  console.log(Data);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav onClick={getCity} onChange={CityName} value={SearchCity} />
            <Body />
          </Route>

          {HideCities ? (
            <Route exact path="/">
              <Body />
            </Route>
          ) : (
            <Route exact path="/city">
              <Nav onClick={getCity} onChange={CityName} value={SearchCity} />
              <CityBySearch
                country={Data?.sys.country}
                name={Data?.name}
                img={`http://openweathermap.org/img/wn/${Data?.weather[0]?.icon}.png`}
                temp={Math.floor(Data?.main?.temp)}
                main={Data?.weather[0]?.main}
              />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import '../css/Citybysearch.css';

function CityBySearch({name,img,temp,main,country}) {
    return (
        <div className="search_city">
          <div  className="city">
          <h1>{name},{country}</h1>
            <img
              src={img}
              alt=""
            />
            <span className="temp">{temp}°C</span>
            <h3>{main}</h3>
          </div>
        </div>
    )
}

export default CityBySearch

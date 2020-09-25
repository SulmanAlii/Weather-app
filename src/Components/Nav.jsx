import React, { useEffect, useState } from "react";
import icon from "../images/WeathCity.png";
import "../css/nav.css";
import SearchIcon from "@material-ui/icons/Search";
import {Link} from 'react-router-dom';


const Nav = ({ onClick,onChange,value }) => {

  
  return (
    <div className="nav">
      <Link to="/">
        <h1>WEATHCITY</h1>
      </Link>
      <div className="nav_input">
        <input type="text" onChange={onChange} value={value} />
        <Link to="/city">
        <SearchIcon
          className="nav_search"
          style={{ color: "white" }}
          onClick={onClick}
          />
          </Link>
      </div>

    
    </div>
  );
};

export default Nav;

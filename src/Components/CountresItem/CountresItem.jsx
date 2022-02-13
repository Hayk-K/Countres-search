import React from "react";
import "./CountresItem.css";

const CountresItem = ({ countre }) => {
  return (
    <div className="countresItem">
      <img className="countres__img" src={countre.flag} alt="img" />
      <div className="countres__body">
        <h4 className="countres__title">{countre.name} </h4>
        <span>Population: {countre.population}</span>
        <span>Area: {countre.area}</span>
        <span>Region: {countre.region}</span>
        <span>Capital: {countre.capital}</span>
      </div>
    </div>
  );
};

export default CountresItem;

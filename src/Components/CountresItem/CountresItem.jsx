import React from "react";
import "./CountresItem.css";

const CountresItem = ({ country }) => {
  return (
    <div className="countresItem">
      <img className="countres__img" src={country.flag} alt="img" />
      <div className="countres__body">
        <h4 className="countres__title">{country.name} </h4>
        <span>Population: {country.population}</span>
        <span>Area: {country.area}</span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </div>
  );
};

export default CountresItem;

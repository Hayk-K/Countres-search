import axios from "axios";
import React from "react";
import CountresItem from "../CountresItem/CountresItem";
import "./Countres.css";

const Countres = () => {
  const [countres, setCountres] = React.useState([]);

  const getCountres = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountres(response.data);
    });
  };

  React.useEffect(() => {
    getCountres();
  }, []);

  return (
    <div className="countres">
      {countres.map((countre) => {
        return <CountresItem countre={countre} key={countre.alpha2Code} />;
      })}
    </div>
  );
};

export default Countres;

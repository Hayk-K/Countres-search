import axios from "axios";
import React from "react";
import MyInput from "../MyInput/MyInput";
import CountresItem from "../CountresItem/CountresItem";
import "./Countres.css";

const Countres = () => {
  const [countres, setCountres] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const filteredCountres = countres.filter((country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const getCountres = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountres(response.data);
    });
  };

  React.useEffect(() => {
    getCountres();
  }, []);

  return (
    <div>
      <MyInput onChange={(event) => setInputValue(event.target.value)} />
      <div className="countres">
        {filteredCountres.map((country) => {
          return <CountresItem country={country} key={country.alpha2Code} />;
        })}
      </div>
    </div>
  );
};

export default Countres;

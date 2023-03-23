import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants/constants";

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "city":
        setCity(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
    }
  };
  const checkEnable = () => (city === "" ? true : false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (checkEnable()) {
      alert("please input city");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
        )
        .then((response) => setWeatherData(response.data));
    }
  }

  return (
    <div>
      <h1>Weather App </h1>
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="County"
          name="country"
          onChange={handleChange}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Weather;

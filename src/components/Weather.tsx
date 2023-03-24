import React, { useState } from "react";
import axios from "axios";
import WeatherTile from "./WeatherTile";
// import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {
  WeatherWrapper,
  WeatherTitle,
  StyledForm,
  StyledInput,
} from "../styling/WeatherStyle";
import { API_KEY } from "../constants/constants";

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [weatherData, setWeatherData] = useState({});
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
  //TODO
  /* const showNotification = () => {
    return (
      <Alert key="warning" variant="warning">
        Please input city
      </Alert>
    );
  }; */

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (checkEnable()) {
      alert("Please input city");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
          setShowWeather(true);
        });
    }
  }

  return (
    <WeatherWrapper>
      <WeatherTitle>Weather App </WeatherTitle>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="County"
          name="country"
          onChange={handleChange}
        ></StyledInput>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </StyledForm>
      {showWeather ? <WeatherTile info={weatherData} /> : null}
    </WeatherWrapper>
  );
};

export default Weather;

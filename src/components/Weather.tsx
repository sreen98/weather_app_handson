import React, { useState } from "react";
import axios from "axios";
import WeatherTile from "./WeatherTile";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import {
  WeatherWrapper,
  WeatherTitle,
  StyledForm,
  StyledInput,
  StyledAlert,
} from "../styling/WeatherStyle";
import { API_KEY } from "../constants/constants";

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [showNoti, setShowNoti] = useState(false);
  const [showWeatherTile, setShowWeatherTile] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "city":
        setShowNoti(false);
        setShowWeatherTile(false);
        setCity(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
    }
  };
  const checkEnable = () => (city === "" ? true : false);

  const showNotification = () => {
    return showNoti ? (
      <StyledAlert variant="danger">Please input city</StyledAlert>
    ) : null;
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (checkEnable()) {
      setShowNoti(true);
    } else {
      setShowSpinner(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
          setShowSpinner(false);
          setShowWeatherTile(true);
        })
        .catch(function (error) {
          console.log(error);
          setShowSpinner(false);
        });
    }
  }

  return (
    <WeatherWrapper>
      <WeatherTitle>Weather App</WeatherTitle>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="City"
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
          {showSpinner ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            `Submit`
          )}
        </Button>
      </StyledForm>
      {showNotification()}
      {showWeatherTile ? <WeatherTile info={weatherData} /> : null}
    </WeatherWrapper>
  );
};

export default Weather;

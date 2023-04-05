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
  const [notiMessage, setNotiMessage] = useState("");
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

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (checkEnable()) {
      setShowNoti(true);
      setNotiMessage("Please input city");
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
          let message: string =
            error?.response?.data?.message ?? "Please try again";
          setShowNoti(true);
          setNotiMessage(message);
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
        <Button
          variant="primary"
          onClick={(e) => handleSubmit(e)}
          disabled={showWeatherTile}
        >
          {showSpinner ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            `Submit`
          )}
        </Button>
      </StyledForm>
      {showNoti ? (
        <StyledAlert variant="danger">{notiMessage}</StyledAlert>
      ) : null}
      {showWeatherTile ? <WeatherTile info={weatherData} /> : null}
    </WeatherWrapper>
  );
};

export default Weather;

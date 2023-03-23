import React from "react";

const WeatherTile: React.FC<any> = (props) => {
  const weatherInfo = props.info;
  return <>Weather Info of {weatherInfo.name}</>;
};
export default WeatherTile;

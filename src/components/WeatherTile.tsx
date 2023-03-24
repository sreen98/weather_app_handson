import React from "react";
import {
  TileWrapper,
  Card,
  CardTitle,
  CardSubtitle,
  StyledH1,
  Main,
  Description,
  IconWrapper,
  Details,
  Section,
  StlyedH4,
  TableData,
} from "../styling/WeatherTileStyle";

type InfoProps = {
  [key: string]: any;
};

const WeatherTile = ({ info }: InfoProps): JSX.Element => {
  const weatherInfo = info;
  const iconURL = `http://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
  return (
    <TileWrapper>
      <Card>
        <CardTitle>
          {weatherInfo.name} , {weatherInfo.sys.country}. Weather
        </CardTitle>
        <CardSubtitle>As of {new Date().toLocaleTimeString()}</CardSubtitle>
        <StyledH1>
          {Math.floor(weatherInfo.main.temp - 273.15)}
          <sup>o</sup>
        </StyledH1>
        <Main>{weatherInfo.weather[0].main}</Main>
        <IconWrapper src={iconURL} alt="" srcSet="" />
        <Description>{weatherInfo.weather[0].description}</Description>
      </Card>
      <Details>
        <Section>
          <table>
            <tbody>
              <tr>
                <TableData>
                  <StlyedH4>High/Low</StlyedH4>
                </TableData>
                <TableData>
                  <span>
                    {Math.floor(weatherInfo.main.temp_max - 273.15)}/
                    {Math.floor(weatherInfo.main.temp_min - 273.15)}
                  </span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Humidity</StlyedH4>
                </TableData>
                <TableData>
                  <span>{weatherInfo.main.humidity} %</span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Pressure</StlyedH4>
                </TableData>
                <TableData>
                  <span>{weatherInfo.main.pressure} hPa</span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Visibility</StlyedH4>
                </TableData>
                <TableData>
                  <span>{weatherInfo.visibility / 1000} Km</span>
                </TableData>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <table>
            <tbody>
              <tr>
                <TableData>
                  <StlyedH4>Wind</StlyedH4>
                </TableData>
                <TableData>
                  <span>
                    {Math.floor((weatherInfo.wind.speed * 18) / 5)} km/hr
                  </span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Wind Direction</StlyedH4>
                </TableData>
                <TableData>
                  <span>
                    {weatherInfo.wind.deg}
                    <sup>o</sup> deg
                  </span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Sunrise</StlyedH4>
                </TableData>
                <TableData>
                  <span>
                    {new Date(
                      weatherInfo.sys.sunrise * 1000
                    ).toLocaleTimeString()}
                  </span>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <StlyedH4>Sunset</StlyedH4>
                </TableData>
                <TableData>
                  <span>
                    {new Date(
                      weatherInfo.sys.sunset * 1000
                    ).toLocaleTimeString()}
                  </span>
                </TableData>
              </tr>
            </tbody>
          </table>
        </Section>
      </Details>
    </TileWrapper>
  );
};
export default WeatherTile;

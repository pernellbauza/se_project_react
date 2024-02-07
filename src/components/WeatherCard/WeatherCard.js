import "./WeatherCard.css";
import { weatherList } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

const WeatherCard = ({ isDay, type, weatherTemp }) => {
  // console.log(isDay);
  // console.log(type);
  const { currentTemperatureUnit, handleUnitToggle } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const currentWeather = weatherList.find((condition) => {
    return condition.isDay === isDay && condition.type === type;
  });

    // Define the default background color
    const defaultBackgroundColor = "blue";

    // Determine the background color based on the availability of weather data
    const backgroundColor = currentWeather ? "" : defaultBackgroundColor;

  const currentWeatherUrl = currentWeather?.url || "../images/blue.jpg";

  return (
    <div className="weather" id="weather" style={{ backgroundColor }}>
      <div className="weather__temp">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <img
        className="weather__image"
        src={currentWeatherUrl}
        alt="weather display"
      />
    </div>
  );
};

export default WeatherCard;


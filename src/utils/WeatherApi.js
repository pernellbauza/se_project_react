import { APIkey, latitude, longitude } from "./Constants";
import { processServerResponse } from "./utils";

export const getWeatherAndLocation = () => {
  const Api = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return Api;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}`,
    },
  };
  return weather;
};

export const locationData = (data) => {
  return data.name;
};

//export const getWeatherType = (weatherTemp) => {
//  if (weatherTemp >= 86) {
//    return "hot";
//  } else if (weatherTemp >= 66 && weatherTemp <= 85) {
//    return "warm";
//  } else if (weatherTemp <= 65) {
//    return "cold";
//  }
//};

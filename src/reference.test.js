import { useState, useEffect } from "react";

const APIkey = "f6064b1ec0dc07ac6f3ea653d53839fd";

const [location, setLocation] = useState();
const [data, setData] = useState([]);

function getLocationInfo(latitude, longitude) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      if (data.status.code === 200) {
        setLocation(data.results[0].formatted);
      } else {
        console.log("Reverse geolocation request failed.");
      }
    })
    .catch((error) => console.error(error));
}
function success(pos) {
  let crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  getLocationInfo(crd.latitude, crd.longitude);
}
function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
useEffect(() => {
  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        console.log(result);
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
        }
      });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}, []);

// Code for weather api, that I can't figure out how to work
function Weather() {
  const [latitude, setLat] = React.useState("");
  const [longitude, setLong] = React.useState("");
  const [city, setCity] = React.useState("");
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    let WeatherFinalAPIEndPoint = `${WeatherAPIEndPoint}lat=${latitude}&lon=${longitude}&appid=${WeatherAPIKey}`;

    axios.get(WeatherFinalAPIEndPoint).then((response) => {
      setCity(city.data);
    });
  }, []);
  return (
    <div>
      <h1>{setCity.name}</h1>
    </div>
  );
}

export default Weather;

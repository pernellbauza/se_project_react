export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherList = [
  {
    url: require("../images/day/sunny.svg").default,
    isDay: true,
    type: "clear",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    isDay: true,
    type: "cloudy",
  },
  { url: require("../images/day/fog.svg").default, 
    isDay: true, 
    type: "fog" 
  },
  {
    url: require("../images/day/rain.svg").default,
    isDay: true,
    type: "rain",
  },
  {
    url: require("../images/day/snow.svg").default,
    isDay: true,
    type: "snow",
  },
  {
    url: require("../images/day/storm.svg").default,
    isDay: true,
    type: "storm",
  },
  {
    url: require("../images/night/nightcloudy.svg").default,
    isDay: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/nightfog.svg").default,
    isDay: false,
    type: "fog",
  },
  {
    url: require("../images/night/nightmoon.svg").default,
    isDay: false,
    type: "clear",
  },
  {
    url: require("../images/night/nightrain.svg").default,
    isDay: false,
    type: "rain",
  },
  {
    url: require("../images/night/nightsnow.svg").default,
    isDay: false,
    type: "snow",
  },
  {
    url: require("../images/night/nightstorm.svg").default,
    isDay: false,
    type: "storm",
  },
];

export const APIkey = "f6064b1ec0dc07ac6f3ea653d53839fd";

export const latitude = 33.9164;
export const longitude = -118.3526;

export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export const currentTime = Date.now();

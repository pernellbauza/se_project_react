import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperaturUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
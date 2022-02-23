import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import getWeatherData from "../Ajax/ajax";

import "../Ajax/ajax";

function App() {
  // State to saving weather and location infos:
  const [weather, setWeather] = useState({}),
    [location, setLocation] = useState({});

  useEffect(function effect() {
    // After component mounting, make ajax requests to fetch necessary infos:
    // like: weather and ...
    getWeatherAndUpdateAppInfos(setWeather, setLocation);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header location={location} />
        <Main weather={weather} />
      </div>
    </div>
  );
}

async function getWeatherAndUpdateAppInfos(setWeather, setLocation) {
  let data = {};
  try {
    data = await getWeatherData("Takestan");
    const { location, weather } = data;

    console.log(location, weather);

    // Update location state:
    setLocation(location);

    // Update weather state:
    setWeather(weather);
  } catch (error) {
    console.log(error);
  }
}

export default App;

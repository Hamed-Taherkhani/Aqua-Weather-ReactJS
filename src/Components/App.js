import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import getCurrentWeatherData from "../Ajax/ajax";

import "../Ajax/ajax";

function App() {
  // State to saving weather and location info:
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
    data = await getCurrentWeatherData("Takestan");
    const { geo_code, current_weather } = data;

    console.log(geo_code, current_weather);

    // Update location state:
    setLocation(geo_code);

    // Update current weather state:
    setWeather(current_weather);
  } catch (error) {
    console.log(error);
  }
}

export default App;

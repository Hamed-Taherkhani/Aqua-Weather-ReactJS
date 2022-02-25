import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import getWeatherData from "../Ajax/ajax";
import Preload from "./Preload";

import "../Ajax/ajax";

function App() {
  // State to saving weather and location infos:
  const [weather, setWeather] = useState({}),
    [location, setLocation] = useState({});

  // To determine that weather and location data are fetched or not.
  const [isFetched, setIsFetched] = useState(false);

  useEffect(function effect() {
    // After component mounting, make ajax requests to fetch necessary infos:
    // like: weather and ...
    getWeatherAndUpdateAppInfos(setWeather, setLocation, setIsFetched);
  }, []);

  async function getWeatherAndUpdateAppInfos() {
    let data = {};
    try {
      let flag = true;

      data = await getWeatherData("Takestan");
      const { location, weather } = data;

      console.log(location, weather);

      // Update location state:
      setLocation(location);

      // Update weather state:
      setWeather(weather);

      // Set data is successfully fetched:
      if (location !== undefined && weather !== undefined) {
        setIsFetched((prevState) => !prevState);
        flag = !flag;
      } else throw "";
    } catch (error) {
      setTimeout(() => {
        getWeatherAndUpdateAppInfos();
      }, 2000);
    }
  }

  return (
    <div className="app">
      <div
        className="preload-page"
        style={isFetched ? { display: "none" } : null}
      >
        <Preload />
      </div>

      <div
        className="container"
        style={!isFetched ? { display: "none" } : null}
      >
        <div id="bg"></div>

        {isFetched ? (
          <>
            <Header location={location} />
            <Main weather={weather} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;

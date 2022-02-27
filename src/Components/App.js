import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Preload from "./Preload";
import { getItem, isKeyRegistered } from "../LocalStorage/LocalStorage";
import getWeather from "../Ajax/weather";

function App() {
  // State to saving weather and location infos:
  const [weather, setWeather] = useState({}),
    [location, setLocation] = useState({});

  // To determine that weather and location data are fetched or not.
  const [isFetched, setIsFetched] = useState(false);

  useEffect(function effect() {
    getLocationsFromLocalStorage();
  }, []);

  async function getLocationsFromLocalStorage() {
    // If key is not registered,
    if (!isKeyRegistered("locations")) {
      setTimeout(() => {
        setIsFetched(true);
      }, 2000);
      return;
    }

    const item = getItem("locations"),
      { lat, lon } = item[0];

    getWeather(lat, lon, ["alerts", "minutely"])
      .then((res) => {
        setLocation(item[0]);
        setWeather(res);
        setIsFetched(true);
      })
      .catch((err) => {
        setTimeout(() => {
          getLocationsFromLocalStorage();
        }, 1000);
        console.log(err);
      });
  }

  const setLocationState = (locationObj) => {
    setLocation(locationObj);
  };

  const setWeatherState = (weatherObj) => {
    setWeather(weatherObj);
  };

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
            <Header
              location={location}
              setLocation={setLocationState}
              setWeather={setWeatherState}
            />
            <Main weather={weather} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;

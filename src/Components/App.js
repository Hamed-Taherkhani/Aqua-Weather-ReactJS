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
        determineBackgroundColor(res);
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
        <div id="bg">
          <div className="weather-condition-img"></div>
        </div>

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

export function determineBackgroundColor(res) {
  const background = document.getElementById("bg"),
    sunrise = res.current.sunrise,
    sunset = res.current.sunset;

  background.style.opacity = 0;
  background.style.animation = "";

  setTimeout(() => {
    changeColor();
  }, 10);

  function changeColor() {
    const now = Math.floor(Date.now() / 1000);

    console.log(now, sunrise, sunset);

    if (now >= sunrise && now < sunset - 900) {
      background.style.background = "linear-gradient(0, #3ea2e5, #8bc5e3)";
      background.style.opacity = 1;
      background.style.animation = "opacity 600ms ease 0s 1";
    } else if (now >= sunset - 900 && now <= sunset + 900) {
      background.style.background =
        "linear-gradient(0deg, rgb(254, 192, 81) -83%, rgb(255, 229, 119) 5%, rgb(36, 171, 209) 23%, rgb(39, 56, 94) 106%)";
      background.style.opacity = 1;
      background.style.animation = "opacity 600ms ease 0s 1";
    } else {
      background.style.background =
        "linear-gradient(0deg, rgb(0, 0, 0) -20%, rgb(0 70 126), rgb(39, 56, 94))";
      background.style.opacity = 1;
      background.style.animation = "opacity 600ms ease 0s 1";
    }
  }
}

export default App;

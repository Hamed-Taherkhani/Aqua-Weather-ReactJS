import React from "react";
import "./scss/Main.scss";
import DaysForecastsList from "./3DaysForecastsList";
import MoreWeatherInfos from "./MoreWeatherInfos";

function Main(props) {
  const { weather } = props;

  return (
    <main className="app-main">
      <div className="app-info" hidden>
        <h1>
          <strong>Aqua</strong> Weather
        </h1>
        <h2>Get current and forecast weather, everywhere and every time</h2>
      </div>

      <div className="temp ">
        <strong className="amount ">
          {weather.current != undefined
            ? Math.round(weather.current.temp)
            : null}
        </strong>
        <sup className="unit">
          C<sup className="symbol">o</sup>
        </sup>
      </div>

      <div className="weather-condition">
        {weather.current != undefined
          ? weather.current.weather[0].description
          : null}
      </div>

      <div className="aqi flex-row">
        <div>
          <span className="icon">
            <img src="https://img.icons8.com/external-those-icons-fill-those-icons/30/ffffff/external-leaf-nature-ecology-those-icons-fill-those-icons-1.png" />
          </span>
          AQI <span>20</span>
        </div>
      </div>

      <DaysForecastsList weather={weather} />

      <div className="more-forecasts">
        <button className="more-btn">5-days forecasts</button>
      </div>

      <MoreWeatherInfos weather={weather} />
    </main>
  );
}

export default Main;

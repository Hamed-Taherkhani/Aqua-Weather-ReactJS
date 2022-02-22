import React from "react";
import "./scss/Main.scss";
import DaysForecastsList from "./DaysForecastsList";

function Main() {
  return (
    <main className="app-main">
      <div className="app-info" hidden>
        <h1>
          <strong>Aqua</strong> Weather
        </h1>
        <h2>Get current and forecast weather, everywhere and every time</h2>
      </div>

      <div className="temp">
        <strong className="amount">21</strong>
        <sup className="unit">
          C<sup className="symbol">o</sup>
        </sup>
      </div>

      <div className="weather-condition">Clear</div>

      <div className="aqi flex-row">
        <div>
          <span className="icon">
            <img src="https://img.icons8.com/external-those-icons-fill-those-icons/30/ffffff/external-leaf-nature-ecology-those-icons-fill-those-icons-1.png" />
          </span>
          AQI <span>20</span>
        </div>
      </div>

      <DaysForecastsList />

      <div className="more-forecasts">
        <button className="more-btn">5-days forecasts</button>
      </div>
    </main>
  );
}

export default Main;
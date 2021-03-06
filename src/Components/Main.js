import React from "react";
import "./scss/Main.scss";
import ThreeDaysForecastsList from "./3DaysForecastsList";
import MoreWeatherInfos from "./MoreWeatherInfos";
import SevenDaysForecastsList from "./7DaysForecastsList";
import HourlyForecasts from "./HourlyForecasts";

function Main(props) {
  const { weather } = props;

  return (
    <main className="app-main">
      <section className="main-viewport">
        <div className="app-info" hidden>
          <h1>
            <strong>Aqua</strong> Weather
          </h1>
          <h2>Get current and forecast weather, everywhere and every time</h2>
        </div>

        <section style={{ marginTop: "17vh" }}>
          <div className="temp ">
            <strong className="amount number">
              {weather.current !== undefined
                ? Math.round(weather.current.temp)
                : null}
            </strong>
            <sup className="unit">
              C<sup className="symbol">o</sup>
            </sup>
          </div>

          <div className="weather-condition">
            {weather.current !== undefined
              ? weather.current.weather[0].description
              : null}
          </div>
        </section>

        <section>
          <ThreeDaysForecastsList weather={weather} />

          <div className="more-forecasts">
            <button
              className="more-btn"
              onClick={() => togglePage("seven-days-forecast-list")}
            >
              <span className="number">7</span> - Days forecasts
            </button>
          </div>
        </section>
      </section>

      <HourlyForecasts hourlyForecasts={weather.hourly} />

      <MoreWeatherInfos weather={weather} />

      <SevenDaysForecastsList weather={weather} togglePage={togglePage} />
    </main>
  );
}

let flag = false;
function togglePage(id) {
  const pageElement = document.getElementById(id);

  if (!flag) {
    pageElement.style.left = 0;
    pageElement.style.borderRadius = 0;
  } else {
    pageElement.style.left = "100%";
    pageElement.style.borderRadius = "25px";
  }

  flag = !flag;
}

export default Main;

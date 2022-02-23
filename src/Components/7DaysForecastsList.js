import React from "react";
import SevenDaysForecastsListItem from "./7DaysForecastsListItem";
import "./scss/SevenDaysForecastsList.scss";
import date from "../Date/date";
import TempChart from "./TempChart";

function SevenDaysForecastsList(props) {
  const { weather, togglePage } = props;
  let dailyWeatherArr = [];
  if (weather.daily != undefined) dailyWeatherArr = weather.daily;

  const today = new Date();
  const todayIndex = today.getDay() - 1;

  return (
    <div className="seven-days-forecast-list" id="seven-days-forecast-list">
      <header>
        <button
          className="back-btn"
          onClick={() => togglePage("seven-days-forecast-list")}
        >
          back
        </button>
        <div className="page-name">7 - Days forecasts</div>
      </header>

      <main className="flex-row">
        <div className="container">
          <ul className="list flex-row">
            {dailyWeatherArr.map((item, index) => (
              <SevenDaysForecastsListItem
                dayOfWeek={
                  index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : date.getDayOfWeek(todayIndex + index)
                }
                date={`${
                  new Date(Date.now() + index * 86400 * 1000).getMonth() + 1
                }/${new Date(Date.now() + index * 86400 * 1000).getDate()}`}
                key={index}
              />
            ))}
          </ul>

          <TempChart
            deg={{ place: "top" }}
            temps={dailyWeatherArr.map((item) => item.temp.max)}
          />

          <TempChart
            deg={{ place: "down" }}
            temps={dailyWeatherArr.map((item) => item.temp.min)}
          />

          <ul className="list flex-row">
            {dailyWeatherArr.map((item, index) => (
              <SevenDaysForecastsListItem
                wind={{
                  direction: item.wind_deg,
                  speed: item.wind_speed,
                }}
                key={index}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default SevenDaysForecastsList;

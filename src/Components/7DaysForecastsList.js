import React, { useEffect } from "react";
import SevenDaysForecastsListItem from "./7DaysForecastsListItem";
import "./scss/SevenDaysForecastsList.scss";
import date from "../Date/date";
import TempChart from "./TempChart";
import getIconById from "../Icon/icons";
import backIco from "./../Resources/Icons/back.png";

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
          className="back-btn flex-row"
          onClick={() => togglePage("seven-days-forecast-list")}
        >
          <img src={backIco} />
          <div className="page-name">7 - Days forecasts</div>
        </button>
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
                icon={getIconById(item.weather[0].id, item.weather[0].icon)}
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
                icon={getIconById(item.weather[0].id, "n")}
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

import React from "react";
import SevenDaysForecastsListItem from "./7DaysForecastsListItem";
import "./scss/SevenDaysForecastsList.scss";
import { getDayOfWeek } from "../Date/date";
import TempChart from "./TempChart";
import getIconById from "../Icon/icons";
import backIco from "./../Resources/Icons/back.png";

function SevenDaysForecastsList(props) {
  const { weather, togglePage } = props;
  let dailyWeather = weather.daily;

  return (
    <div className="seven-days-forecast-list" id="seven-days-forecast-list">
      <header>
        <button
          className="back-btn flex-row"
          onClick={() => togglePage("seven-days-forecast-list")}
        >
          <img src={backIco} alt="" />
          <div className="page-name">7 - Days forecasts</div>
        </button>
      </header>

      <main className="flex-row">
        <div className="container">
          <ul className="list flex-row">
            {dailyWeather?.map((item, index) => {
              const date = new Date(item.dt * 1000);

              return (
                <SevenDaysForecastsListItem
                  dayOfWeek={
                    index === 0
                      ? "Today"
                      : index === 1
                      ? "Tomorrow"
                      : getDayOfWeek(date.getDay())
                  }
                  date={`${date.getMonth() + 1}/${date.getDate()}`}
                  icon={getIconById(item.weather[0].id, item.weather[0].icon)}
                  key={index}
                />
              );
            })}
          </ul>

          <TempChart
            deg={{ place: "top" }}
            temps={dailyWeather?.map((item) => item.temp.max)}
          />

          <TempChart
            deg={{ place: "down" }}
            temps={dailyWeather?.map((item) => item.temp.min)}
          />

          <ul className="list flex-row">
            {dailyWeather?.map((item, index) => (
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

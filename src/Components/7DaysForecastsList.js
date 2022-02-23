import React from "react";
import SevenDaysForecastsListItem from "./7DaysForecastsListItem";
import "./scss/SevenDaysForecastsList.scss";
import date from "../Date/date";

function SevenDaysForecastsList(props) {
  const { weather } = props;
  let dailyWeatherArr = [];
  if (weather.daily != undefined) dailyWeatherArr = weather.daily;

  const today = new Date();
  const todayIndex = today.getDay() - 1,
    dateIndex = today.getDate();

  return (
    <div className="seven-days-forecast-list">
      <header>
        <button className="back-btn">back</button>
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

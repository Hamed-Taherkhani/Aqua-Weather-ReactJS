import React from "react";
import ForecastsListItem from "./3DaysForecastsListItem";
import date from "../Date/date";

function DaysForecastsList(props) {
  const { weather } = props;
  const todayIndex = new Date().getDay();

  return (
    <ul className="days-forecast-list">
      <ForecastsListItem
        day="Today"
        condition={
          weather.daily != undefined ? weather.daily[0].weather[0].main : null
        }
        temp={{
          max:
            weather.daily != undefined
              ? Math.round(weather.daily[0].temp.max)
              : null,
          min:
            weather.daily != undefined
              ? Math.round(weather.daily[0].temp.min)
              : null,
        }}
      />
      <ForecastsListItem
        day="Tomorrow"
        condition={
          weather.daily != undefined ? weather.daily[1].weather[0].main : null
        }
        temp={{
          max:
            weather.daily != undefined
              ? Math.round(weather.daily[1].temp.max)
              : null,
          min:
            weather.daily != undefined
              ? Math.round(weather.daily[1].temp.min)
              : null,
        }}
      />
      <ForecastsListItem
        day={date.getDayOfWeek(todayIndex + 2)}
        condition={
          weather.daily != undefined ? weather.daily[2].weather[0].main : null
        }
        temp={{
          max:
            weather.daily != undefined
              ? Math.round(weather.daily[2].temp.max)
              : null,
          min:
            weather.daily != undefined
              ? Math.round(weather.daily[2].temp.min)
              : null,
        }}
      />
    </ul>
  );
}

export default DaysForecastsList;

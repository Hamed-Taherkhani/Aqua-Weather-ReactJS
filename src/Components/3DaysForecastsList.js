import React from "react";
import ForecastsListItem from "./3DaysForecastsListItem";
import getIconById from "../Icon/icons";
import { getDayOfWeek } from "../Date/date";

function DaysForecastsList(props) {
  const { weather } = props;
  const items = [{}, {}, {}];
  const dayOfWeek = [
    "Today",
    "Tomorrow",
    getDayOfWeek(new Date(Date.now() + 2 * 86400 * 1000).getDay()),
  ];

  return (
    <ul className="days-forecast-list">
      {items.map((item, index) => (
        <ForecastsListItem
          day={dayOfWeek[index]}
          condition={
            weather.daily !== undefined
              ? weather.daily[index].weather[0].main
              : null
          }
          temp={{
            max:
              weather.daily !== undefined
                ? Math.round(weather.daily[index].temp.max)
                : null,
            min:
              weather.daily !== undefined
                ? Math.round(weather.daily[index].temp.min)
                : null,
          }}
          icon={
            weather.daily !== undefined
              ? getIconById(
                  weather.daily[index].weather[0].id,
                  weather.daily[index].weather[0].icon
                )
              : null
          }
          key={index}
        />
      ))}
    </ul>
  );
}

export default DaysForecastsList;

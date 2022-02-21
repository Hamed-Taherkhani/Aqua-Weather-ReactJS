import React from "react";
import ForecastsListItem from "./ForecastsListItem";

function DaysForecastsList() {
  return (
    <ul className="days-forecast-list">
      <ForecastsListItem
        day="Today"
        condition="Clear"
        temp={{ max: 10, min: 5 }}
      />
      <ForecastsListItem
        day="Today"
        condition="Clear"
        temp={{ max: 10, min: 5 }}
      />
      <ForecastsListItem
        day="Today"
        condition="Clear"
        temp={{ max: 10, min: 5 }}
      />
    </ul>
  );
}

export default DaysForecastsList;

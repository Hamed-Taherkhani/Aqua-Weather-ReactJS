import React from "react";
import "./scss/3DaysForecastsListItem.scss";

function ForecastsListItem(props) {
  const { day, condition, temp, icon } = props;

  return (
    <li className="forecasts-list-item flex-row">
      <div className="left flex-row">
        <section className="condition-icon">
          <img src={icon} />
        </section>
        <section className="week-day">{day}</section>
        <span> - </span>
        <section className="condition">{condition}</section>
      </div>

      <div className="right flex-row">
        <section className="max-temp">
          {temp.max}
          <sup>o</sup>
        </section>
        <span>/</span>
        <section className="min-temp">
          {temp.min}
          <sup>o</sup>
        </section>
      </div>
    </li>
  );
}

export default ForecastsListItem;

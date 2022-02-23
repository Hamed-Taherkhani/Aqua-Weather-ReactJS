import React from "react";
import "./scss/ForecastsListItem.scss";

function ForecastsListItem(props) {
  const { day, condition, temp } = props;

  return (
    <li className="forecasts-list-item flex-row">
      <div className="left flex-row">
        <section className="condition-icon">
          <img src="" />
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

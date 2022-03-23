import React from "react";
import "./scss/7DaysForecastsListItem.scss";
import navigatorIco from "./../Resources/Icons/navigator.png";

function SevenDaysForecastsListItem(props) {
  const { dayOfWeek, date, wind, icon } = props;

  return (
    <li className="list-item flex-column">
      <section className="date">
        <section className="day-of-week">{dayOfWeek}</section>
        <section className="date-of-day">{date}</section>
      </section>

      <section
        className={
          wind !== undefined
            ? "condition-icon night-weather-icon"
            : "condition-icon"
        }
      >
        <img src={icon} alt="" />
      </section>

      {buildWindComponent(wind)}
    </li>
  );
}

export function buildWindComponent(wind) {
  return (
    <section className="wind flex-row">
      <section className="direction">
        {wind !== undefined ? (
          <img
            src={navigatorIco}
            style={{ transform: `rotate(${wind.direction + 135}deg)` }}
            alt=""
          />
        ) : null}
      </section>

      <section className="speed">
        {wind !== undefined ? (
          <>
            {wind.speed}
            <span>km / h</span>
          </>
        ) : null}
      </section>
    </section>
  );
}

export default SevenDaysForecastsListItem;

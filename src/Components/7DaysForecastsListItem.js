import React from "react";
import "./scss/7DaysForecastsListItem.scss";

function SevenDaysForecastsListItem(props) {
  const { dayOfWeek, date, wind } = props;

  return (
    <li className="list-item flex-column">
      <section className="date">
        <section className="day-of-week">{dayOfWeek}</section>
        <section className="date-of-day">{date}</section>
      </section>

      <section className="condition-icon">
        <img src="" alt=" " />
      </section>

      <section className="wind flex-row">
        <section className="direction">
          {/* {wind !== undefined ? wind.direction : null} */}
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
    </li>
  );
}

export default SevenDaysForecastsListItem;

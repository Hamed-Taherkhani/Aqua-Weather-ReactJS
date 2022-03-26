import React from "react";
import getIconById from "../Icon/icons";
import { buildWindComponent } from "./7DaysForecastsListItem";

// Import styles sheet:
import "./scss/HourlyForecasts.scss";

function HourlyForecasts(props) {
  const { hourlyForecasts } = props;

  return (
    <ul className="hourly-forecasts-list">
      {hourlyForecasts?.map((item, index) => {
        const date = new Date(item.dt * 1000);

        return (
          <li className="hourly-forecasts-list-item" key={index}>
            <div className="date number">
              {index === 0
                ? "Now"
                : date.getHours() !== 0
                ? date.getHours().toString().padStart(2, 0)
                : `${date.getMonth() + 1}/${date.getDate()}`}
            </div>

            <div className="temp number">
              {Math.round(item.temp)}
              <span className="circle">o</span>
            </div>

            <div className="condition-icon">
              <img
                src={getIconById(item.weather[0].id, item.weather[0].icon)}
                alt=""
              />
            </div>

            {buildWindComponent({
              direction: item.wind_deg,
              speed: item.wind_speed,
            })}
          </li>
        );
      })}
    </ul>
  );
}

export default HourlyForecasts;

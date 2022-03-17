import React from "react";
import getIconById from "../Icon/icons";

// Import styles sheet:
import "./scss/HourlyForecasts.scss";

function HourlyForecasts(props) {
  const { hourlyForecasts } = props;

  console.log(hourlyForecasts);

  return (
    <ul className="hourly-forecasts-list">
      {hourlyForecasts.map((item, index) => {
        const date = new Date(item.dt * 1000);

        return (
          <li className="hourly-forecasts-list-item" key={index}>
            <div className="date">
              {date.getHours() !== 0
                ? date.getHours().toString().padStart(2, 0)
                : `${date.getMonth() + 1}/${date.getDate()}`}
            </div>

            <div className="condition-icon">
              <img
                src={getIconById(item.weather[0].id, item.weather[0].icon)}
              />
            </div>

            <div className="condition">{item.weather[0].main}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default HourlyForecasts;

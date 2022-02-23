import React from "react";
import "./scss/MoreWeatherInfos.scss";

function MoreWeatherInfos(props) {
  const { weather } = props;

  return (
    <div className="more-weather-infos">
      <div className="container">
        <div className="sunrise-sunset flex-row">
          <section className="sunrise-time time">sunrise 4:51</section>
          <section className="sun-and-orbit">
            <section className="orbit"></section>
          </section>
          <section className="sunset-time time">sunset 8:00</section>
        </div>

        <table className="further-infos">
          <tbody>
            <tr>
              <td>
                <section className="head-title">Real feel</section>
                <section className="amount">
                  {weather.current != undefined
                    ? weather.current.feels_like
                    : null}
                </section>
              </td>
              <td>
                <section className="head-title">Humidity</section>
                <section className="amount">
                  {weather.current != undefined
                    ? weather.current.humidity
                    : null}
                  <span>%</span>
                </section>
              </td>
            </tr>

            <tr>
              <td>
                <section className="head-title">Pursuer</section>
                <section className="amount">
                  {weather.current != undefined
                    ? weather.current.pressure
                    : null}
                  <span>mbar</span>
                </section>
              </td>
              <td>
                <section className="head-title">UVI</section>
                <section className="amount">
                  {weather.current != undefined
                    ? Math.round(weather.current.uvi)
                    : null}
                </section>
              </td>
            </tr>
            <tr>
              <td>
                <section className="head-title">Wind speed</section>
                <section className="amount">
                  {weather.current != undefined
                    ? weather.current.wind_speed
                    : null}
                  <span>km/h</span>
                </section>
              </td>
              <td>
                <section className="head-title">Clouds</section>
                <section className="amount">
                  {weather.current != undefined ? weather.current.clouds : null}
                </section>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoreWeatherInfos;

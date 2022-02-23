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
                <section className="head-title">Real fell</section>
                <section className="amount">
                  {weather.main != null ? weather.main.feels_like : null}
                </section>
              </td>
              <td>
                <section className="head-title">Humidity</section>
                <section className="amount">
                  {weather.main != null ? weather.main.humidity : null}
                  <span>%</span>
                </section>
              </td>
            </tr>

            <tr>
              <td>
                <section className="head-title">Pursuer</section>
                <section className="amount">
                  {weather.main != null ? weather.main.pressure : null}
                  <span>mbar</span>
                </section>
              </td>
              <td>
                <section className="head-title">Sea level</section>
                <section className="amount">
                  {weather.main != null ? weather.main.sea_level : null}
                  <span>m</span>
                </section>
              </td>
            </tr>
            <tr>
              <td>
                <section className="head-title">Wind speed</section>
                <section className="amount">
                  {weather.wind != null ? weather.wind.speed : null}
                  <span>km/h</span>
                </section>
              </td>
              <td>
                <section className="head-title">Sea level</section>
                <section className="amount">
                  {weather.main != null ? weather.main.sea_level : null}
                  <span>m</span>
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

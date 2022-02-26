import React, { useState } from "react";
import "./scss/Header.scss";
import getGeocoding from "../Ajax/geocoding";
import Loading from "./Loading";
import getWeather from "../Ajax/weather";
import backIco from "./../Resources/Icons/back.png";

function Header(props) {
  const { location, setLocation, setWeather } = props;

  // To save similar results list:
  const [resultsList, setResultsList] = useState([]);

  // Determine fetching is on or not:
  const [isFetching, setIsFetching] = useState(false);

  return (
    <header className="app-header">
      <ul className="header-items-list flex-row">
        <li className="header-item icon">
          <button
            className="icon"
            onClick={() => togglePage("search-location")}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
              alt="Add"
            />
          </button>

          <div className="search-location flex-column" id="search-location">
            <header>
              <button
                className="back-btn flex-row"
                onClick={() => togglePage("search-location")}
              >
                <img src={backIco} />
                <div className="page-name">Search location</div>
              </button>
            </header>

            <div className="container">
              <div className="input">
                <form
                  onSubmit={(e) =>
                    getSimilarResultsList(e, setResultsList, setIsFetching)
                  }
                >
                  <input
                    id="location-name-input"
                    type="text"
                    placeholder="City name"
                  />
                </form>
              </div>

              <ul
                className="results-list"
                onClick={(e) => {
                  getCityGeocode(
                    e,
                    resultsList,
                    setResultsList,
                    setLocation,
                    setWeather
                  );
                  togglePage("search-location");
                }}
              >
                {resultsList.length !== 0
                  ? resultsList.map((item, index) => (
                      <li className="result" key={index} index={index}>
                        {item.name} - {item.state} - {item.country}
                      </li>
                    ))
                  : null}
              </ul>

              {isFetching ? (
                <section className="loading">
                  <Loading text="Fetching data ..." />
                </section>
              ) : null}
            </div>
          </div>
        </li>
        <li className="header-item">
          {location.name !== undefined ? location.name : null}
        </li>
        <li className="header-item">
          <button id="more" className="icon">
            <img
              src="https://img.icons8.com/ios-filled/30/ffffff/menu-2.png"
              alt="More"
            />
          </button>
        </li>
      </ul>
    </header>
  );
}

function getSimilarResultsList(e, setResultsList, setIsFetching) {
  e.preventDefault();

  const inputElement = e.target.firstElementChild,
    inputValue = inputElement.value;

  if (inputValue.trim().length === 0) return;

  setResultsList([]);
  setIsFetching(true);

  getGeocoding(inputValue, 5)
    .then((res) => {
      console.log(res);
      setResultsList(res);
      setIsFetching(false);
      inputElement.value = "";
    })
    .catch((err) => {
      setTimeout(() => {
        getSimilarResultsList(e, setResultsList);
      }, 1000);
    });
}

function getCityGeocode(
  e,
  resultsList,
  setResultsList,
  setLocation,
  setWeather
) {
  const index = e.target.getAttribute("index");
  const { lat, lon } = resultsList[index];

  getWeather(lat, lon, ["alerts", "minutely"])
    .then((res) => {
      setLocation(resultsList[index]);
      setWeather(res);
      setResultsList([]);
      console.log(res);
    })
    .catch((err) => console.log(err));
}

let flag = false;
function togglePage(id) {
  // Find page element with its id:
  const pageElement = document.getElementById(id);

  if (flag) {
    pageElement.style.left = "100%";
    pageElement.style.borderRadius = "25px";
  } else {
    pageElement.style.left = 0;
    pageElement.style.borderRadius = 0;
  }

  flag = !flag;
}

export default Header;

import React, { useState } from "react";
import "./scss/Header.scss";
import getGeocoding from "../Ajax/geocoding";
import Loading from "./Loading";
import getWeather from "../Ajax/weather";
import backIco from "./../Resources/Icons/back.png";
import {
  append,
  getItem,
  isKeyRegistered,
  saveInLocalStorage,
} from "../LocalStorage/LocalStorage";
import { determineBackgroundColor } from "./App";

function Header(props) {
  const { location, setLocation, setWeather } = props;

  // To save similar results list:
  const [resultsList, setResultsList] = useState(getItem("locations"));

  // Determine fetching is on or not:
  const [isFetching, setIsFetching] = useState(false);

  return (
    <header className="app-header">
      <ul className="header-items-list flex-row">
        <li className="header-item icon">
          <button
            className="icon"
            onClick={() => togglePage("search-location", setResultsList)}
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
                onClick={() => togglePage("search-location", setResultsList)}
              >
                <img src={backIco} alt="" />
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
                  togglePage("search-location", setResultsList);
                }}
              >
                {resultsList !== undefined
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
        getSimilarResultsList(e, setResultsList, setIsFetching);
      }, 1000);

      console.log(err);
    });
}

function getCityGeocode(
  e,
  resultsList,
  setResultsList,
  setLocation,
  setWeather,
  isErrorOccurred
) {
  const index = e.target.getAttribute("index");
  const { country, lat, lon, name, state } = resultsList[index];
  const locationObj = {
    country: country,
    lat: lat,
    lon: lon,
    name: name,
    state: state,
  };

  if (!isErrorOccurred) {
    // Saving Geocode in Local Storage:
    if (isKeyRegistered("locations"))
      // If key is registered append to previous locations:
      append("locations", [locationObj]);
    // If not, create new key/value pairs and save data:
    else saveInLocalStorage("locations", [locationObj]);
  }

  getWeather(lat, lon, ["alerts", "minutely"])
    .then((res) => {
      setLocation(resultsList[index]);
      setWeather(res);
      setResultsList([]);
      determineBackgroundColor(res);
      console.log(res);
    })
    .catch((err) => {
      setTimeout(() => {
        getCityGeocode(
          e,
          resultsList,
          setResultsList,
          setLocation,
          setWeather,
          true
        );
      }, 1000);
      console.log(err);
    });
}

let flag = false;
function togglePage(id, setResultsList) {
  // Find page element with its id:
  const pageElement = document.getElementById(id);

  if (flag) {
    pageElement.style.left = "100%";
    pageElement.style.borderRadius = "25px";
  } else {
    pageElement.style.left = 0;
    pageElement.style.borderRadius = 0;
    setResultsList(getItem("locations"));
  }

  flag = !flag;
}

export default Header;

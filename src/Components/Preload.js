import React from "react";
import icon from "./../Resources/Icons/cloudy day.png";
import "./scss/Preload.scss";
import Loading from "./Loading";

function Preload() {
  return (
    <div className="preload flex-column">
      <section className="app-icon">
        <img src={icon} alt="" />
      </section>

      <Loading text="Connecting ..." />

      <footer className="powered-by">Powered by openweathermap</footer>
    </div>
  );
}

export default Preload;

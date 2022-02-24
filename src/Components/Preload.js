import React from "react";
import icon from "./../Resources/Icons/cloudy day.png";
import "./scss/Preload.scss";

function Preload() {
  return (
    <div className="preload flex-column">
      <section className="app-icon">
        <img src={icon} />
      </section>

      <section className="loading-animation">
        <div class="lds-dual-ring"></div>
      </section>

      <footer className="powered-by">Powered by openweathermap</footer>
    </div>
  );
}

export default Preload;

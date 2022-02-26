import React from "react";
import "./scss/Loading.scss";

function Loading(props) {
  const { text } = props;

  return (
    <section className="loading">
      <div className="lds-dual-ring"></div>
      <div className="text">{text}</div>
    </section>
  );
}

export default Loading;

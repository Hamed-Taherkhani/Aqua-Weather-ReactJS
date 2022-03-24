import React from "react";
import "./scss/TempChart.scss";

function TempChart(props) {
  const { temps, deg } = props;

  if (temps === undefined) return null;

  let tempAverage = 0,
    max = Math.abs(temps[0]);
  for (let i = 0; i < temps.length; i++) {
    tempAverage += temps[i];

    const tmp = Math.abs(temps[i]);
    if (max < tmp) max = tmp;
  }
  tempAverage /= temps.length;
  tempAverage = Math.floor(tempAverage);

  return (
    <ul
      className="chart flex-row list"
      style={{ padding: `${Math.ceil(max) + 5}px 0` }}
    >
      {temps.map((item, index) => makePoint(item, tempAverage, index, deg))}
    </ul>
  );
}

function makePoint(temp, tempAverage, key, deg) {
  return (
    <li className="chart-pixel" key={key}>
      <span
        className="point"
        style={{
          bottom: `${(temp - tempAverage) * 5}px`,
        }}
      >
        <span
          className="temp number"
          style={
            deg.place === "top"
              ? { order: 0, marginBottom: "3px" }
              : deg.place === "down"
              ? { order: 1, marginTop: "3px" }
              : null
          }
        >
          {Math.round(temp)}
        </span>
        <span className="shape"></span>
      </span>
    </li>
  );
}

export default TempChart;

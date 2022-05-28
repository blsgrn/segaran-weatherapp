import React from "react";

function PHV({ pres, hum, vis, windspeed, winddeg, sunriseT, sunsetT }) {
  return (
    <>
      <div className="phv">
        <div id="pressure"> {pres}</div>
        <div id="humidity">{hum}</div>
        <div id="visibility">{vis}</div>
      </div>
      <div className="wind">
        <div id="wind-speed">{windspeed}</div>
        <div id="wind-deg">{winddeg}</div>
      </div>
      <div className="sun">
        <div id="sunrise">{sunriseT}</div>
        <div id="sunset">{sunsetT}</div>
      </div>
      <div />
    </>
  );
}

export default PHV;

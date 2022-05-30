import React from "react";
import { ImCompass } from "react-icons/im";

function PHV({ pres, hum, vis, windspeed, winddeg, sunriseT, sunsetT }) {
  // const sunriseTLocal = sunriseT.toLocaleTimeString();
  // const sunsetTLocal = sunsetT.toLocaleTimeString();

  return (
    <div className="phvwindsun">
      <div className="phv">
        <div id="pressure"> {pres}</div>
        <div id="humidity">{hum}</div>
        <div id="visibility">{vis}</div>
      </div>
      <div className="wind">
        <ImCompass size={28} />
        <div id="wind-speed">{windspeed}</div>
        <div id="wind-deg">{winddeg}</div>
      </div>
      <div className="sun">
        <div id="sunrise">{sunriseT}</div>
        <div id="sunset">{sunsetT}</div>
      </div>
      <div />
    </div>
  );
}

export default PHV;

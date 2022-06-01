import React from "react";
import { ImCompass } from "react-icons/im";

function PHV({ pressure, humidity, visibility, speed, deg, sunrise, sunset }) {
  return (
    <div className="phvwindsun">
      <div className="phv">
        <div id="pressure">
          <h3>Pressure: {pressure}</h3>
        </div>
        <div id="humidity">{humidity}</div>
        <div id="visibility">{visibility}</div>
      </div>
      <div className="wind">
        <ImCompass size={28} />
        <div id="wind-speed">{speed}</div>
        <div id="wind-deg">{deg}</div>
      </div>
      <div className="sun">
        <div id="sunrise">{sunrise}</div>
        <div id="sunset">{sunset}</div>
      </div>
      <div />
    </div>
  );
}

export default PHV;

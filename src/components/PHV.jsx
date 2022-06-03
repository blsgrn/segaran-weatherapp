import React from "react";
import { ImCompass } from "react-icons/im";

function PHV({ pres, hum, vis, windspeed, winddeg, sunriseT, sunsetT }) {
  return (
    <div className="phvwindsun">
      <div className="phv">
        <div id="pressure">
          <h4>Pressure:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "16px", fontWeight: "normal" }}
          >
            {pres}
          </span>
        </div>

        <div id="humidity">
          <h4>Humidity:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "16px", fontWeight: "normal" }}
          >
            {hum}
          </span>
        </div>
        <div id="visibility">
          <h4>Visibility:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "16px", fontWeight: "normal" }}
          >
            {vis}
          </span>
        </div>
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

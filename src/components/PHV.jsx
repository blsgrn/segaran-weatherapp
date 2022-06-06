import React from "react";
import { ImCompass } from "react-icons/im";

function PHV({ pres, hum, vis, windspeed, winddeg, sunriseT, sunsetT }) {
  // let setTime = `${sunsetT.toLocaleTimeString()}`;
  // let setTime = `${sunsetT.toLocaleDateString()}, ${sunsetT.toLocaleTimeString()}`;

  // let riseTime = `${sunriseT.toLocaleTimeString()}`;
  // let riseTime = `${sunriseT.toLocaleDateString()}, ${sunriseT.toLocaleTimeString()}`;

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ampm;
    return strTime;
  }

  let riseTime = formatAMPM(sunriseT);
  let setTime = formatAMPM(sunsetT);

  // console.log(riseTime);
  return (
    <div className="phvwindsun">
      <div className="phv">
        <div id="pressure">
          <h4>Pressure:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "14px", fontWeight: "normal" }}
          >
            {pres}
          </span>
        </div>

        <div id="humidity">
          <h4>Humidity:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "14px", fontWeight: "normal" }}
          >
            {hum}
          </span>
        </div>
        <div id="visibility">
          <h4>Visibility:</h4>
          <span
            style={{ padding: "0 5px", fontSize: "14px", fontWeight: "normal" }}
          >
            {vis}
          </span>
        </div>
      </div>
      <div className="wind">
        <ImCompass size={28} />
        <div className="wind-data">
          <div style={{ padding: "2px 3px" }} id="wind-speed">
            {windspeed} m/s
          </div>
          <div style={{ padding: "2px 3px" }} id="wind-deg">
            {winddeg} Degree
          </div>
        </div>
      </div>

      <div className="sun">
        <div className="sunrise-sunset">
          <div id="sunrise">
            <h4>Sunrise:</h4>
            <span
              style={{
                padding: "0 5px",
                fontSize: "14px",
                fontWeight: "normal",
              }}
            >
              {riseTime}
            </span>
          </div>

          <div id="sunset">
            <h4>Sunset:</h4>
            <span
              style={{
                padding: "0 5px",
                fontSize: "14px",
                fontWeight: "normal",
              }}
            >
              {setTime}
            </span>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default PHV;

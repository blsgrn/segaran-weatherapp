import React from "react";

function Temperature({ temperature, t_min, t_max }) {
  return (
    <div className="temperature-display">
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
        }}
        className="temp-display"
      >
        {`${temperature} `}
        <p>
          <sup style={{ fontSize: "20px" }}>O</sup>C{" "}
        </p>
      </div>
      <div className="temp-min-max">
        <div className="temp-min">
          <h4>Temp Min:</h4>{" "}
          <span
            style={{
              padding: "0 5px",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            {`${t_min} `}
            <sup style={{ fontSize: "8px" }}>O</sup>C
          </span>
        </div>
        <div className="temp-max">
          <h4>Temp Max:</h4>
          <span
            style={{
              padding: "0 5px",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            {`${t_max} `}
            <sup style={{ fontSize: "8px" }}>O</sup>C
          </span>
        </div>
      </div>
    </div>
  );
}

export default Temperature;

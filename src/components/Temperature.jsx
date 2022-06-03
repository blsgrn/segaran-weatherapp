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
        <p>
          {`${temperature} `}
          <sup style={{ fontSize: "18px" }}>O</sup>C
        </p>
      </div>
      <div className="temp-min-max">
        <div className="temp-min">
          <p>
            {`${t_min} `}
            <sup style={{ fontSize: "8px" }}>O</sup>C
          </p>
        </div>
        <div className="temp-max">
          <p>
            {`${t_max} `}
            <sup style={{ fontSize: "8px" }}>O</sup>C
          </p>
        </div>
      </div>
    </div>
  );
}

export default Temperature;

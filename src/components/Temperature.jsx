import React from "react";

function Temperature({ temperature, t_min, t_max }) {
  return (
    <>
      <div className="temp-display">{temperature}</div>
      <div className="temp-min-max">
        <div className="temp-min">{t_min}</div>
        <div className="temp-max">{t_max}</div>
      </div>
    </>
  );
}

export default Temperature;

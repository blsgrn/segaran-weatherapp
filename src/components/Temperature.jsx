import React from "react";

function Temperature({ temp, t_min, t_max }) {
  return (
    <div className="temperature-display">
      <div className="temp-display">
        <p>
          {`${temp} `}
          <sup>O</sup>C
        </p>
      </div>
      <div className="temp-min-max">
        <div className="temp-min">
          <p>
            {`${t_min} `}
            <sup>O</sup>C
          </p>
        </div>
        <div className="temp-max">
          <p>
            {`${t_max} `}
            <sup>O</sup>C
          </p>
        </div>
      </div>
    </div>
  );
}

export default Temperature;

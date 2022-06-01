import React from "react";

function Temperature({ temp, min, max }) {
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
            {`${min} `}
            <sup>O</sup>C
          </p>
        </div>
        <div className="temp-max">
          <p>
            {`${max} `}
            <sup>O</sup>C
          </p>
        </div>
      </div>
    </div>
  );
}

export default Temperature;

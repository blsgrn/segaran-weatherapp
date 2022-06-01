import React from "react";

function Sky({ cloud, description }) {
  return (
    <div className="sky">
      <div className="sky-display">
        <img src={cloud} alt="cloud-img" />
      </div>
      <div className="cloud-desc"> {description}</div>
    </div>
  );
}

export default Sky;

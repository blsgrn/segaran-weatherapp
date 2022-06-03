import React from "react";

function Sky({ cloud, desc }) {
  const iconUrl = `http://openweathermap.org/img/wn/${cloud}@2x.png`;

  return (
    <div className="sky">
      <div className="sky-display">
        <img src={iconUrl} alt="cloud-img" />
      </div>
      <div className="cloud-desc"> {desc}</div>
    </div>
  );
}

export default Sky;

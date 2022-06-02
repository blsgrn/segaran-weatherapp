import React from "react";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";

function Colorized({ city, country, cloud, description, temp, min, max }) {
  const getColor = () => {
    let colorArr = [
      "rgba(215, 255, 71, 0.4)",
      "rgba(71, 255, 86, 0.4)",
      "rgba(71, 249, 255, 0.4)",
      "rgba(71, 145, 255, 0.4)",
      "rgba(255, 71, 117, 0.4)",
      "rgba(27, 7, 99, 0.4)",
    ];
    let len = colorArr.length;
    let randomNum = Math.floor(Math.random() * len);
    let color = colorArr[randomNum];
    colorArr.splice(randomNum, 1);
    return color;
  };

  let gbColor = getColor();
  return (
    <div
      className="colorized"
      // style={{
      //   backgroundColor: `${gbColor}`,
      //   // backgroundImage: `${randImg}`,
      // }}
    >
      <div className="overlay" style={{ background: `${gbColor}` }}></div>
      <div className="city-date-sky">
        <CityDate city={city} country={country} />
        <Sky cloud={cloud} description={description} />
      </div>
      <Temperature />
    </div>
  );
}

export default Colorized;

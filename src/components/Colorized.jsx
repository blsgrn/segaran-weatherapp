import React from "react";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";

function Colorized({ city, nation, cloud, desc, temperature, t_min, t_max }) {
  const getColor = () => {
    let colorArr = [
      "rgba(215, 255, 71, 0.3)",
      "rgba(71, 255, 86, 0.3)",
      "rgba(71, 249, 255, 0.3)",
      "rgba(71, 145, 255, 0.3)",
      "rgba(255, 71, 117, 0.3)",
      "rgba(27, 7, 99, 0.3)",
      "rgba(236, 74, 150, 0.3)",
      "rgba(8, 85, 18, 0.3)",
      "rgba(66, 4, 4, 0.3)",
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
        <CityDate city={city} nation={nation} />
        <Sky cloud={cloud} desc={desc} />
      </div>
      <Temperature temperature={temperature} t_max={t_max} t_min={t_min} />
    </div>
  );
}

export default Colorized;

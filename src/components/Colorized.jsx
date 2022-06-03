import React from "react";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";

function Colorized({ city, nation, cloud, desc, temperature, t_min, t_max }) {
  const getColor = () => {
    let colorArr = [
      "rgba(231, 228, 40, 0.479)",
      "rgba(231, 135, 135, 0.603)",
      "rgba(135, 231, 226, 0.356)",
      "rgba(96, 235, 126, 0.404)",
      "rgba(83, 104, 199, 0.404)",
      "rgba(199, 83, 154, 0.432)",
      "rgba(215, 255, 71, 0.3)",
      "rgba(71, 255, 86, 0.3)",
      "rgba(71, 249, 255, 0.3)",
      "rgba(71, 145, 255, 0.3)",
      "rgba(255, 71, 117, 0.3)",
      "rgba(236, 74, 150, 0.3)",
      "rgba(135, 211, 125, 0.363)",
      "rgba(169, 125, 211, 0.363)",
      "rgba(108, 114, 202, 0.281)",
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

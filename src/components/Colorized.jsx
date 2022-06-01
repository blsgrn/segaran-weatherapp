import React from "react";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";

function Colorized({ city, country, cloud, description, temp, min, max }) {
  // function getImgSrc() {
  //   let imgArr = [
  //     { src: "../data/colorclouds/pic01.png" },
  //     { src: "../data/colorclouds/pic02.png" },
  //     { src: "../data/colorclouds/pic03.png" },
  //     { src: "../data/colorclouds/pic04.png" },
  //     { src: "../data/colorclouds/pic05.png" },
  //     { src: "../data/colorclouds/pic06.png" },
  //     { src: "../data/colorclouds/pic07.png" },
  //     { src: "../data/colorclouds/pic08.png" },
  //   ];
  //   let len = imgArr.length;
  //   let randomNum = Math.floor(Math.random() * len);
  //   let imgSrc = imgArr[randomNum].src;
  //   imgArr.splice(randomNum, 1);
  //   return imgSrc;
  // }
  // let randImgSrc = getImgSrc();
  // let randImg = require(randImgSrc);

  function getColor() {
    var colorArr = [
      "rgba(215, 255, 71, 0.4)",
      "rgba(71, 255, 86, 0.4)",
      "rgba(71, 249, 255, 0.4)",
      "rgba(71, 145, 255, 0.4)",
      "rgba(255, 71, 117, 0.4)",
      "rgba(27, 7, 99, 0.4)",
    ];
    var len = colorArr.length;
    var randomNum = Math.floor(Math.random() * len);
    var color = colorArr[randomNum];
    colorArr.splice(randomNum, 1);
    return color;
  }
  let gbColor = getColor();
  // let transColor = "rgba(255,0,0,0.4)";

  return (
    <div
      className="colorized"
      // style={{
      //   backgroundColor: `${gbColor}`,
      //   // backgroundImage: `${randImg}`,
      // }}
    >
      <div className="overlay" style={{ background: `${gbColor}` }}></div>
      <CityDate />
      <Sky />
      <Temperature />
    </div>
  );
}

export default Colorized;

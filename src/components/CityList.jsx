import React from "react";
import City from "./City";

// import getColor from "../data/RandomColor";

function CityList({ arr }) {
  if (!arr || arr.length === 0) {
    return <p>No City Available</p>;
  }

  function getColor() {
    var colorArr = ["green", "yellow", "red", "blue", "orange", "pink", "cyan"];
    var len = colorArr.length;
    var randomNum = Math.floor(Math.random() * len);
    var color = colorArr[randomNum];
    colorArr.splice(randomNum, 1);
    return color;
  }
  let gbColor = getColor();

  return (
    <div className="city-list">
      {arr.map((codenum) => (
        <div style={{ backgroundColor: `${gbColor}` }}>
          <City key={codenum} code={codenum} />
        </div>
      ))}
    </div>
  );
}

export default CityList;

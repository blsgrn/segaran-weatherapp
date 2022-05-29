import React from "react";
import City from "./City";

// import getColor from "../data/RandomColor";

function CityList({ arr }) {
  if (!arr || arr.length === 0) {
    return <p>No City Available</p>;
  }

  return (
    <div className="city-list">
      {arr.map((codenum) => (
        <City key={codenum} code={codenum} />
      ))}
    </div>
  );
}

export default CityList;

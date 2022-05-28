import React from "react";
import City from "./City";

function CityList({ arr }) {
  if (!arr || arr.length === 0) {
    <p>No City Available</p>;
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

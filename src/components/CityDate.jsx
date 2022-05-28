import React from "react";

function CityDate({ city, date }) {
  return (
    <>
      <div className="city-display">{city}</div>
      <div className="date-display">{date}</div>
    </>
  );
}

export default CityDate;

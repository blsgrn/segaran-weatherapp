import React from "react";

function CityDate({ city, nation }) {
  let today = new Date();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  let month = months[today.getMonth()];

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ampm;
    return strTime;
  }

  let time = formatAMPM(today);

  let todaysTimeDateMonth = time + " " + month + " " + today.getDate();

  return (
    <div className="city-day">
      <div className="city-display">{`${city}, ${nation}`}</div>
      <div className="date-display">{todaysTimeDateMonth}</div>
    </div>
  );
}

export default CityDate;

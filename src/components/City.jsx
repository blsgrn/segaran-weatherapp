import React, { useState } from "react";
import PHV from "./PHV";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";
import Card from "./shared/Card";
// import getColor from "../data/RandomColor";

// const gbColor = getColor();
// style={{ backgroundColor: `${gbColor}` }}

function City({ code }) {
  // const [gbColor, setGbColor] = useState();
  const [city, setCity] = useState("Colombo");
  const [date, setDate] = useState("thursday 12, 2002");
  const [cloud, setCloud] = useState("few Clouds");
  const [temperature, setTemp] = useState("34C");
  const [t_min, setTempMin] = useState("32");
  const [t_max, setTempMax] = useState("45");
  const [pres, setPressure] = useState("234");
  const [hum, setHumidity] = useState("5678");
  const [vis, setVisibility] = useState("12");
  const [windspeed, setSpeed] = useState("34km/s");
  const [winddeg, setDeg] = useState("25deg");

  const [sunriseT, setSunrise] = useState();
  const [sunsetT, setSunset] = useState();

  // const api = `bbcb8ad070b251ae782fc83a6754b820`;

  // const base = `https://api.openweathermap.org/data/2.5/weather?id=${code}&appid=${api}`;

  // fetch(base)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     const { name, visibility } = data;
  //     const { sunrise, sunset, country } = data.sys;
  //     const { description, icon } = data.weather[0];
  //     const { temp, temp_min, temp_max, pressure, humidity } = data.main;
  //     const { speed, deg } = data.wind;

  //     // console.log(country, sunrise, sunset, description, icon);
  //     // console.log(temp, temp_min, temp_max, pressure, humidity, visibility);
  //     // console.log(speed, deg);

  //     setCity(() => {
  //       return `${name},${country}`;
  //     });
  //     setTemp(temp);
  //     setTempMax(temp_max);
  //     setTempMin(temp_min);
  //     setPressure(pressure);
  //     setHumidity(humidity);
  //     setVisibility(visibility);
  //     setSpeed(speed);
  //     setDeg(deg);
  //     setSunrise(sunrise);
  //     setSunset(sunset);
  //   });

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
    <div style={{ backgroundColor: `${gbColor}` }}>
      <Card>
        <CityDate city={city} date={date} />
        <Sky cloud={cloud} />
        <Temperature temp={temperature} temp_min={t_min} temp_max={t_max} />
        <PHV
          pressure={pres}
          humidity={hum}
          visibility={vis}
          speed={windspeed}
          deg={winddeg}
          sunrise={sunriseT}
          sunset={sunsetT}
        />
      </Card>
    </div>
  );
}

export default City;

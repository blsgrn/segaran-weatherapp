import React, { useState } from "react";
import PHV from "./PHV";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";
import { useNavigate } from "react-router-dom";

// style={{ backgroundColor: `${gbColor}` }}

function City({ code }) {
  const [city, setCity] = useState("Colombo, LK");

  const [cloud, setCloud] = useState("04d");
  const [description, setDescription] = useState();

  const [temperature, setTemp] = useState(299.12);
  const [t_min, setTempMin] = useState(299.12);
  const [t_max, setTempMax] = useState(299.12);

  const [pres, setPressure] = useState(1010);
  const [hum, setHumidity] = useState(80);
  const [vis, setVisibility] = useState(10000);
  const [windspeed, setSpeed] = useState(6.65);
  const [winddeg, setDeg] = useState(227);

  const [sunriseT, setSunrise] = useState(1653870213);
  const [sunsetT, setSunset] = useState(1653915179);

  const navigate = useNavigate();

  const api = `bbcb8ad070b251ae782fc83a6754b820`;

  const base = `https://api.opeweathermap.org/data/2.5/weather?id=${code}&units=metric&appid=${api}`;

  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { name, visibility } = data;
      const { sunrise, sunset, country } = data.sys;
      const { description, icon } = data.weather[0];
      const { temp, temp_min, temp_max, pressure, humidity } = data.main;
      const { speed, deg } = data.wind;

      console.log(country, sunrise, sunset, description, icon);
      console.log(temp, temp_min, temp_max, pressure, humidity, visibility);
      console.log(speed, deg);

      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const sunriseGMT = new Date(sunrise * 1000);
      const sunsetGMT = new Date(sunset * 1000);

      setCity(() => {
        return `${name}, ${country}`;
      });
      setCloud(iconUrl);
      setDescription(description);

      setTemp(temp);
      setTempMin(temp_min);
      setTempMax(temp_max);

      setPressure(pressure);
      setHumidity(humidity);
      setVisibility(visibility);
      setSpeed(speed);
      setDeg(deg);
      setSunrise(sunriseGMT);
      setSunset(sunsetGMT);
    });

  function handleClick() {
    navigate(`/city`);
  }

  function getColor() {
    var colorArr = [
      "#afb42b",
      "#ff77a9",
      "#b0ff57",
      "#eeff41",
      "#519657",
      "#607d8b",
      "#ff8a50",
      "#8e24aa",
      "#0081cb",
      "#003d33",
      "#2962ff",
      "#dd2c00",
      "#a30000",
    ];
    var len = colorArr.length;
    var randomNum = Math.floor(Math.random() * len);
    var color = colorArr[randomNum];
    colorArr.splice(randomNum, 1);
    return color;
  }
  let gbColor = getColor();

  return (
    <div
      className="card"
      style={{ backgroundColor: `${gbColor}` }}
      onClick={() => handleClick()}
    >
      <CityDate city={city} />
      <Sky cloud={cloud} description={description} />
      <Temperature temp={temperature} t_min={t_min} t_max={t_max} />
      <PHV
        pressure={pres}
        humidity={hum}
        visibility={vis}
        speed={windspeed}
        deg={winddeg}
        sunrise={sunriseT}
        sunset={sunsetT}
      />
    </div>
  );
}

export default City;

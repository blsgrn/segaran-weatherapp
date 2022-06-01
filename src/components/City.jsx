import React, { useState } from "react";
import PHV from "./PHV";
import Colorized from "./Colorized";

function City({ code }) {
  const [city, setCity] = useState("Colombo");
  const [country, setCountry] = useState("LK");

  const [cloud, setCloud] = useState("04d");
  const [description, setDescription] = useState("few clouds");

  const [temperature, setTemp] = useState("299.12");
  const [t_min, setTempMin] = useState(299.12);
  const [t_max, setTempMax] = useState(299.12);

  const [pres, setPressure] = useState("1010");
  const [hum, setHumidity] = useState(80);
  const [vis, setVisibility] = useState(10000);
  const [windspeed, setSpeed] = useState(6.65);
  const [winddeg, setDeg] = useState(227);

  const [sunriseT, setSunrise] = useState(1653870213);
  const [sunsetT, setSunset] = useState(1653915179);

  const api = `bbcb8ad070b251ae782fc83a6754b820`;

  //  ./pic/2.5/weather?id=1850147&units=metric&appid=bbcb8ad070b251ae782fc83a6754b820

  const base = `./pic2.5/weather?id=${code}&units=metric&appid=${api}`;

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

      // How to set two data got from API as one prop
      // setCity(() => {
      //   return `${name}, ${country}`;
      // });

      // setCity(name);
      // setCountry(country);
      // setCloud(iconUrl);
      // setDescription(description);

      // setTemp(temp);
      // setTempMin(temp_min);
      // setTempMax(temp_max);

      // setPressure(pressure);
      // setHumidity(humidity);
      // setVisibility(visibility);
      // setSpeed(speed);
      // setDeg(deg);
      // setSunrise(sunriseGMT);
      // setSunset(sunsetGMT);
    });

  // function handleClick() {
  //   navigate(`/city`);
  // }
  // onClick={() => handleClick()}

  return (
    <div className="card">
      <Colorized
        city={city}
        country={country}
        cloud={cloud}
        description={description}
        temp={temperature}
        min={t_min}
        max={t_max}
      />

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

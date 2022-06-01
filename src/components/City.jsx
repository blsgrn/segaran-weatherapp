import React, { useState } from "react";
import PHV from "./PHV";
import Colorized from "./Colorized";

function City({ code }) {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [cloud, setCloud] = useState();
  const [description, setDescription] = useState();

  const [temperature, setTemp] = useState();
  const [t_min, setTempMin] = useState();
  const [t_max, setTempMax] = useState();

  const [pres, setPressure] = useState();
  const [hum, setHumidity] = useState();
  const [vis, setVisibility] = useState();
  const [windspeed, setSpeed] = useState();
  const [winddeg, setDeg] = useState();

  const [sunriseT, setSunrise] = useState();
  const [sunsetT, setSunset] = useState();

  const api = `bbcb8ad070b251ae782fc83a6754b820`;

  const base = `https://api.opennnweathermap.org/data/2.5/weather?id=${code}&appid=${api}`;

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

      setCity(name);
      setCountry(country);
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

import React, { useState } from "react";
import PHV from "./PHV";
import CityDate from "./CityDate";
import Sky from "./Sky";
import Temperature from "./Temperature";

function City({ code }) {
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [cloud, setCloud] = useState();
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

  const base = `https://api.openweathermap.org/data/2.5/weather?id=${code}&appid=${api}`;

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

      // console.log(country, sunrise, sunset, description, icon);
      // console.log(temp, temp_min, temp_max, pressure, humidity, visibility);
      // console.log(speed, deg);

      setCity(() => {
        return `${name},${country}`;
      });
      setTemp(temp);
      setTempMax(temp_max);
      setTempMin(temp_min);
      setPressure(pressure);
      setHumidity(humidity);
      setVisibility(visibility);
      setSpeed(speed);
      setDeg(deg);
      setSunrise(sunrise);
      setSunset(sunset);
    });

  return (
    <div className="city">
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
    </div>
  );
}

export default City;

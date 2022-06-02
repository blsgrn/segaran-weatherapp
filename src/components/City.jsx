import React, { useEffect, useState } from "react";
import PHV from "./PHV";
import Colorized from "./Colorized";

function City({ code }) {
  const [city, setCity] = useState();
  const [nation, setCountry] = useState();

  const [cloud, setCloud] = useState();
  const [desc, setDescription] = useState();

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

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const api = `bbcb8ad070b251ae782fc83a6754b820`;
    const base = `https://api.opennweathermapp.org/data/2.5/weather?id=${code}&appid=${api}`;
    fetch(base)
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);

        // const { name, visibility } = result;
        // const { sunrise, sunset, country } = result.sys;
        // const { description, icon } = result.weather[0];
        // const { temp, temp_min, temp_max, pressure, humidity } = result.main;
        // const { speed, deg } = result.wind;

        // console.log(country, sunrise, sunset, description, icon);
        // console.log(temp, temp_min, temp_max, pressure, humidity, visibility);
        // console.log(speed, deg);
        // console.log(result);

        // const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // const sunriseGMT = new Date(sunrise * 1000);
        // const sunsetGMT = new Date(sunset * 1000);

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
      })
      .catch((error) => console.log(error));
  }, [code]);

  console.log(weather);

  return (
    <div className="card">
      <Colorized
        city={city}
        country={nation}
        cloud={cloud}
        description={desc}
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

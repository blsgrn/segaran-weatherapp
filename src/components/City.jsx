import React, { useEffect, useState } from "react";
import PHV from "./PHV";
import Colorized from "./Colorized";
import { getWeather } from "../services/List";

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
    let mounted = true;
    getWeather(code).then((data) => {
      if (mounted) {
        setWeather(data);
        setCity(data.name);
        setCountry(data.sys.country);
        setCloud(data.weather[0].icon);
        setDescription(data.weather[0].description);
        setTemp(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setPressure(data.main.pressure);
        setHumidity(data.main.humidity);
        setVisibility(data.visibility);
        setSpeed(data.wind.speed);
        setDeg(data.wind.deg);
        setSunrise(data.sys.sunrise);
        setSunset(data.sys.sunset);
      }
    });
    return () => (mounted = false);
  }, [code]);

  console.log(weather);
  console.log(city, vis);
  console.log(nation, sunriseT, sunsetT, desc, cloud);
  console.log(temperature, t_min, t_max, pres, hum, vis);
  console.log(windspeed, winddeg);

  return (
    <div className="card">
      <Colorized
        city={city}
        nation={nation}
        cloud={cloud}
        desc={desc}
        temperature={temperature}
        t_min={t_min}
        t_max={t_max}
      />

      <PHV
        pres={pres}
        hum={hum}
        vis={vis}
        windspeed={windspeed}
        winddeg={winddeg}
        sunriseT={sunriseT}
        sunsetT={sunsetT}
      />
    </div>
  );
}

export default City;

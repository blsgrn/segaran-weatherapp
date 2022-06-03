import React, { useEffect, useState } from "react";
import PHV from "./PHV";
import Colorized from "./Colorized";
import { getWeather } from "../services/List";

function City({ code }) {
  const [capital, setCapital] = useState("Colombo");
  const [nation, setCountry] = useState("LK");

  const [cloud, setCloud] = useState("04d");
  const [desc, setDescription] = useState("overcast clouds");

  const [temperature, setTemp] = useState(30.5);
  const [t_min, setTempMin] = useState(27.1);
  const [t_max, setTempMax] = useState(34.7);

  const [pres, setPressure] = useState(1010);
  const [hum, setHumidity] = useState(80);
  const [vis, setVisibility] = useState(10000);
  const [windspeed, setSpeed] = useState(6.65);
  const [winddeg, setDeg] = useState(227);

  const [sunriseT, setSunrise] = useState(1653870213);
  const [sunsetT, setSunset] = useState(1653915179);

  const [weather, setWeather] = useState({});

  useEffect(() => {
    let mounted = true;
    getWeather(code).then((data) => {
      if (mounted) {
        setWeather(data);
        setCountry(data.sys.country);
        setCapital(data.name);
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
  console.log(capital, vis);
  console.log(nation, sunriseT, sunsetT, desc, cloud);
  console.log(temperature, t_min, t_max, pres, hum, vis);
  console.log(windspeed, winddeg);

  return (
    <div className="card">
      <Colorized
        city={capital}
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

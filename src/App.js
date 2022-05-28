import React from "react";
import Header from "./components/Header";
import CityList from "./components/CityList";
import cityArray from "./data/CityArray";

function App() {
  return (
    <>
      <Header text="Weather App" />
      <CityList arr={cityArray} />
    </>
  );
}

export default App;

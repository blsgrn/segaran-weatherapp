import React from "react";
import Header from "./components/Header";
import CityList from "./components/CityList";
import cityArray from "./data/CityArray";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [searchField, setSearchField] = useState("");

  function handleChange(e) {
    setSearchField(e.target.value);
  }

  const filteredCities = cityArray.filter((city) =>
    city.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <Header text="Weather App" />
      <SearchBox placeholder="Enter a city" handleChange={handleChange} />
      <CityList arr={filteredCities} />
    </>
  );
}

export default App;

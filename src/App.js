import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import CityList from "./components/CityList";

import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [searchField, setSearchField] = useState("");

  function handleChange(e) {
    setSearchField(e.target.value);
  }

  // const filteredCities = cityArray.filter((city) =>
  //   city.toLowerCase().includes(searchField.toLowerCase())
  // );

  return (
    <>
      <Header text="Weather App" />
      <SearchBox placeholder="Enter a city" handleChange={handleChange} />
      <div className="app-wrapper">
        <div className="container-wrap">
          <CityList />
        </div>
      </div>
      <Footer ftText="Fidenz®" />
    </>
  );
}

export default App;

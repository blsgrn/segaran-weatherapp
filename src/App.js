import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CityList from "./components/CityList";
import cityArray from "./data/CityArray";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import SingleCity from "./pages/SingleCity";

function App() {
  const [searchField, setSearchField] = useState("");

  function handleChange(e) {
    setSearchField(e.target.value);
  }

  const filteredCities = cityArray.filter((city) =>
    city.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Router>
      <Header text="Weather App" />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <SearchBox
                placeholder="Enter a city"
                handleChange={handleChange}
              />
              <CityList arr={filteredCities} />
            </>
          }
        ></Route>
        <Route path="/city" element={<SingleCity />} />
      </Routes>
    </Router>
  );
}

export default App;

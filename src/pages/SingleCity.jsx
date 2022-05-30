import React from "react";
import { Link } from "react-router-dom";
import City from "../components/City";

function SingleCity() {
  return (
    <>
      <City />
      <Link to="/">MainPage</Link>
    </>
  );
}

export default SingleCity;

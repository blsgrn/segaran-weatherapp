import PropTypes from "prop-types";
import React from "react";
import { ImCloud } from "react-icons/im";
import { ImSun } from "react-icons/im";

function Header({ text, textColor }) {
  const headerStyles = {
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <ImSun color="#eeff41" size={28} />
        <ImCloud color="#0288d1" size={42} />
        {text}
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Header",
  textColor: "#fff",
};

Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;

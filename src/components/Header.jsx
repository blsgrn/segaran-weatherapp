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
      <div className="icon-container">
        <div className="sun-icon">
          <ImSun color="#eeff41" size={28} />
        </div>
        <div className="cloud-icon">
          <ImCloud color="#2979ff" size={42} />
        </div>
      </div>
      <div className="app-heading">{text}</div>
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

import PropTypes from "prop-types";
import React from "react";

function Header({ text, textColor }) {
  const headerStyles = {
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
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

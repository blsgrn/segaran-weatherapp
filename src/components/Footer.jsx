import React from "react";

function Footer({ ftText, ftColor, ftFontSize }) {
  const footerStyles = {
    color: ftColor,
    fontSize: ftFontSize,
  };

  return (
    <footer className="footer" style={footerStyles}>
      {ftText}
    </footer>
  );
}

Footer.defaultProps = {
  ftText: "Company Name®",
  ftColor: "#fff",
  ftFontSize: "16px",
};
export default Footer;

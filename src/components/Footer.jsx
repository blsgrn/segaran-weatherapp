import React from "react";

function Footer({ footer, ftColor, ftFontSize }) {
  const footerStyles = {
    color: ftColor,
    fontSize: ftFontSize,
  };

  return (
    <footer className="footer" style={footerStyles}>
      {footer}
    </footer>
  );
}

Footer.defaultProps = {
  ftColor: "#fff",
  ftFontSize: "6px",
};
export default Footer;

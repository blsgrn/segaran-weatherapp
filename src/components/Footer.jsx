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
  flex: 1,
  ftColor: "#fff",
  ftFontSize: "12px",
};
export default Footer;

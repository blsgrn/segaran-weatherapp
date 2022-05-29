import React from "react";
// import gbColor from "../../data/RandomColor";
// style={{ backgroundColor: `${gbColor}` }}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Card.defaultProps = {
//   bgColor: `backgroundColor: 'red'`,
// };
export default Card;

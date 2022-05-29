const colors = ["green", "yellow", "red", "blue", "orange", "pink", "cyan"];
function getColor() {
  var len = colors.length;
  var randomNum = Math.floor(Math.random() * len);
  var color = colors[randomNum];
  colors.splice(randomNum, 1);
  return color;
}
// const gbColor = getColor();

// console.log(gbColor);

export default getColor;

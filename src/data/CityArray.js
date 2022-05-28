import myJson from "./cities.json";

// console.log(myJson.List[0].CityCode);

const mainList = myJson.List;
const cityArray = [];

for (let i = 0; i < mainList.length; i++) {
  cityArray.push(mainList[i].CityCode);
}
console.log(cityArray);
export default cityArray;

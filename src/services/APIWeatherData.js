export function getWeather(code) {
  let api = `bbcb8ad070b251ae782fc83a6754b820`;
  let base = `https://api.opennweathermap.org/data/2.5/weather?id=${code}&appid=${api}&units=metric`;
  return fetch(base).then((response) => response.json());
}

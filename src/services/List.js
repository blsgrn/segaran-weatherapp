export function getWeather(code) {
  let api = `bbcb8ad070b251ae782fc83a6754b820`;
  let base = `https://api.openweathermap.org/data/2.5/weather?id=${code}&appid=${api}`;
  return fetch(base).then((response) => response.json());
}

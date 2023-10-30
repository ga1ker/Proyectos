const UrlBase = "https://api.openweathermap.org/data/2.5/weather?"
const ApiKey = "a347ee9e0968aeeb35fad419ad6cc751"

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = (url) => fetch(url).then((response) => response.json());

async function getClima(lat, lon) {
  const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  console.log(url);
  const clima = await fetchApi(url);
  console.log(clima);
  document.querySelector('#left h2').innerHTML = clima.name;
  document.querySelector('#left h3').innerHTML = (clima.main.temp - 273.15).toFixed(2) + "°C";
  pintaFondo(clima.main.temp);
}

async function getClimaByCity(city){
    const url = `${ UrlBase }q=${ city }&appid=${ ApiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#ciudad h1').innerHTML = clima.name;
    document.querySelector('#ciudad h2').innerHTML = (clima.main.temp - 273.15).toFixed(2) + "°C";
    pintaFondocity(clima.main.temp);
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon);
  }
);

function pintaFondo(temperature) {
  const body = document.querySelector('body');

  if (temperature < 10) {
    body.style.background = "#6165c2";
  } else if (temperature < 20) {
    body.style.background = "#ffff00";
  } else {
    body.style.background = "#ff124b";
  }
}

function pintaFondocity(temperature) {
  const body = document.querySelector('#ciudad');

  if (temperature < 10) {
    body.style.background = "#6165c2";
  } else if (temperature < 20) {
    body.style.background = "#ffff00";
  } else {
    body.style.background = "#ff124b";
  }
}

btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
});
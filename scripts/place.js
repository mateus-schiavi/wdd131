const latitude = -23.5425;
const longitude = -46.3108;

const weatherUrl =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${latitude}` +
  `&longitude=${longitude}` +
  `&current_weather=true`;

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

function displayWeather(data) {
  const weather = data.current_weather;

  const temperature = weather.temperature;
  const windSpeed = weather.windspeed;
  const weatherCode = weather.weathercode;

  document.querySelector("#temp").textContent = temperature.toFixed(1);
  document.querySelector("#wind").textContent = windSpeed.toFixed(1);
  document.querySelector("#conditions").textContent =
    getWeatherDescription(weatherCode);

  if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#wind-chill").textContent =
      `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    document.querySelector("#wind-chill").textContent = "N/A";
  }
}

function getWeatherDescription(code) {
  const map = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    61: "Rain",
    63: "Moderate Rain",
    80: "Rain Showers",
    95: "Thunderstorm"
  };
  return map[code] || "Unknown";
}

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) throw new Error("Failed to fetch weather");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", fetchWeather);


const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;
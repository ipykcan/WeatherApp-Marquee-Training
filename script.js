let cityInput = document.getElementById("cityInput");
let btn = document.getElementById("getWeatherBtn");
let display = document.getElementById("weatherDisplay");
let descriptionDisplay = document.getElementById("descriptionDisplay");
let feelsLikeDisplay = document.getElementById("feelsLikeInfo");
let humidityDisplay = document.getElementById("humidityInfo");
let windDisplay = document.getElementById("windInfo");
let seaLevelDisplay = document.getElementById("seaLevelInfo");  
btn.addEventListener("click", () => {
    let city = cityInput.value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid`;

    console.log(city);
    console.log(url);

    async function getWeather() {
let response = await fetch(url);
let data = await response.json();

const temp = Math.round(data.main.temp);
console.log(temp);

const description = data.weather[0].description;
const feelsLike = Math.round(data.main.feels_like);
const humidity = data.main.humidity;
const windSpeed = data.wind.speed;
const seaLevel = data.main.sea_level;
console.log(description);
console.log(feelsLike);
console.log(humidity);
console.log(windSpeed);
console.log(seaLevel);
    display.innerHTML = `${temp}°C`;
    descriptionDisplay.innerHTML = `Details: ${description}`;
    feelsLikeDisplay.innerHTML = `Feels like: ${feelsLike}°C`;
    humidityDisplay.innerHTML = `Humidity: ${humidity}%`;
    windDisplay.innerHTML = `Wind Speed: ${windSpeed} m/s`;
    seaLevelDisplay.innerHTML = `Sea Level: ${seaLevel}`;
}

getWeather(); 

});






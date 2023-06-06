export default function getWeather(location) {
    console.log(`Trying to get weather from ${location}`);
    console.log(loadWeather(location));
  };
   
async function loadWeather(location) {
    let input = location.toLowerCase();
    
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8a84e8aab8c24f2388f134054230506&q=${input}&days=3`, {mode: 'cors'});
    const data = await response.json();
    extractWeather(data);
};

async function extractWeather(jsonData) {
    const current = jsonData.current;
    const today = jsonData.forecast.forecastday[0].day;
    const tomorrow = jsonData.forecast.forecastday[1].day;
    const twoday = jsonData.forecast.forecastday[2].day;

    displayWeather(current, today, tomorrow, twoday);
};

function displayWeather(current, today, tomorrow, twoday) {
    console.log(current);
    console.log(today);
    console.log(tomorrow);
    console.log(twoday);
};
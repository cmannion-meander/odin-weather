export default function getWeather() {
    let location = document.getElementById('searchbar').value;

    console.log(`Trying to get weather for ${location}`);

    return loadWeather(location);
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

async function displayWeather(current, today, tomorrow, twoday) {
    const content = document.querySelector(".content");

    removeAllChildNodes(content);

    let todayWxGif = await loadGif(current.condition.text);
    let todayFxGif = await loadGif(today.condition.text);
    let tomorrowFxGif = await loadGif(tomorrow.condition.text);
    let twodayFxGif = await loadGif(twoday.condition.text);

    const todayWx = document.createElement('div');
    todayWx.classList.add("card");
    todayWx.innerHTML = `
    <h2>Current Weather</h2>
    <ul>
        <li> Conditions: ${current.condition.text}</li>
        <li> Current Temp: ${current.temp_f} Fahrenheit</li>
    </ul>
    `;
    const todayWxImg = document.createElement('img');
    todayWxImg.src = todayWxGif;
    todayWx.appendChild(todayWxImg);

    const todayFx = document.createElement('div');
    todayFx.classList.add("card");
    todayFx.innerHTML = `
    <h2>Today's Forecast</h2>
    <ul>
        <li> Conditions: ${today.condition.text}</li>
        <li> Avg Temp: ${today.avgtemp_f} Fahrenheit</li>
        <li> Chance of Rain: ${today.daily_chance_of_rain}% </li>
    </ul>
    `;
    const todayFxImg = document.createElement('img');
    todayFxImg.src = todayFxGif;
    todayFx.appendChild(todayFxImg);

    const tomorrowFx = document.createElement('div');
    tomorrowFx.classList.add("card");
    tomorrowFx.innerHTML = `
    <h2>Tomorrow's Forecast</h2>
    <ul>
        <li> Conditions: ${tomorrow.condition.text}</li>
        <li> Avg Temp: ${tomorrow.avgtemp_f} Fahrenheit</li>
        <li> Chance of Rain: ${tomorrow.daily_chance_of_rain}% </li>
    </ul>
    `;
    const tomorrowFxImg = document.createElement('img');
    tomorrowFxImg.src = tomorrowFxGif;
    tomorrowFx.appendChild(tomorrowFxImg);

    const twodayFx = document.createElement('div');
    twodayFx.classList.add("card");
    twodayFx.innerHTML = `
    <h2>Two Days from Now Forecast</h2>
    <ul>
        <li> Conditions: ${twoday.condition.text}</li>
        <li> Avg Temp: ${twoday.avgtemp_f} Fahrenheit</li>
        <li> Chance of Rain: ${twoday.daily_chance_of_rain}% </li>
    </ul>
    `;
    const twodayFxImg = document.createElement('img');
    twodayFxImg.src = twodayFxGif;
    twodayFx.appendChild(twodayFxImg);

    content.appendChild(todayWx);
    content.appendChild(todayFx);
    content.appendChild(tomorrowFx);
    content.appendChild(twodayFx);

    console.log(current);
    console.log(today);
    console.log(tomorrow);
    console.log(twoday);
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
async function loadGif(wxConditions) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=aadl6EcoVSJxdrp1kXDuf4hHcEg6iR4P&s=${wxConditions}`, {mode: 'cors'});
    const gifData = await response.json();
    const imgUrl = gifData.data.images.original.url;
    return imgUrl;
};


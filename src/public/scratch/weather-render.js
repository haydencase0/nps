export function renderWeatherCard(data) {
    const weatherObj = document.getElementById("weather");
    weatherObj.innerHTML = `
        <h2>${data.location} ${data.icon}</h2>
        <h3>${data.condition}</h3>
        <h3>Temperature: ${data.temp}</h3>
        <h3>Wind Speed: ${data.windspeed}</h3>
    `
}

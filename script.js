async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "ce8c636648e37b271739e67b8f8f9cd0"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weather-info").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weather-info").innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>Error fetching data</p>`;
    }
}

const apiKey = '9deb6421e21f12b52ee6c0391bf51460'; // Your OpenWeatherMap API key

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.classList.add('visible');
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function fetchWeather() {
    const location = document.getElementById('location-input').value;
    if (location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        console.log(`Fetching weather data from: ${url}`);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Unable to fetch weather data. Please check the location and try again.');
            });
    } else {
        alert('Please enter a location');
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            console.log(`Fetching weather data from: ${url}`);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('Unable to fetch weather data. Please check the location and try again.');
                });
        }, () => {
            alert('Unable to retrieve your location');
        });
    } else {
        alert('Geolocation is not supported by this browser');
    }
}

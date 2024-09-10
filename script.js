let valueSearch = document.getElementById('valueSearch');
let cityElement = document.getElementById('city');
let temperatureElement = document.getElementById('temperature');
let descriptionElement = document.getElementById('description');
let cloudsElement = document.getElementById('clouds');
let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');
let forecastElement = document.getElementById('forecast');

const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    const APIKey = '7a7fee5d9a21efe33efdcbe9c3b9d277';
    const city = valueSearch.value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const { coord } = json;
            const { lon, lat } = coord;

            cityElement.querySelector('figcaption').innerText = json.name;
            cityElement.querySelector('img').src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`;

            temperatureElement.innerHTML = `${json.main.temp}<span>°C</span>`;
            descriptionElement.innerText = json.weather[0].description;
            cloudsElement.innerText = `${json.clouds.all}%`;
            humidityElement.innerText = `${json.main.humidity}%`;
            pressureElement.innerText = `${json.main.pressure}hPa`;

            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`)
                .then(response => response.json())
                .then(data => {
                    forecastElement.innerHTML = '';
                    const dailyForecast = data.list.filter((item, index) => index % 8 === 0);

                    dailyForecast.forEach(day => {
                        const date = new Date(day.dt_txt);
                        const forecastCard = document.createElement('div');
                        forecastCard.classList.add('card', 'text-center', 'bg-light', 'p-2');
                        forecastCard.style.width = '100px';
                        forecastCard.innerHTML = `

                            <div><strong>${date.toDateString()}</strong></div>
                            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" class="w-50 mx-auto" alt="weather">
                            <div>${day.main.temp}°C</div>
                        `;
                        forecastElement.appendChild(forecastCard);
                    });
                });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        });
});

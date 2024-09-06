let valueSearch = document.getElementById('valueSearch');
let cityElement = document.getElementById('city');
let temperatureElement = document.getElementById('temperature');
let descriptionElement = document.getElementById('description');
let cloudsElement = document.getElementById('clouds');
let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');

const searchButton = document.querySelector('.btn'); // Reference to the search button

searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const APIKey = '7a7fee5d9a21efe33efdcbe9c3b9d277';
    const city = valueSearch.value; // Get the city from the input field

    if (city === '') return; // Do nothing if input is empty

    // Fetch the weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json); // Debugging: print the weather data

            // Update the UI with the fetched weather data
            cityElement.querySelector('figcaption').innerText = json.name;
            cityElement.querySelector('img').src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`; // Use OpenWeather API icon

            temperatureElement.innerHTML = `${json.main.temp}<span>°C</span>`;
            descriptionElement.innerText = json.weather[0].description;
            cloudsElement.innerText = `${json.clouds.all}%`;
            humidityElement.innerText = `${json.main.humidity}%`;
            pressureElement.innerText = `${json.main.pressure}hPa`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        });
});

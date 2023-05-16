const apiKey = process.env.API_KEY;
const weatherIcon = document.querySelector(".weather-icon");

const getLocation = () => {
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value.slice(0, 2).toUpperCase();
    return { city: city, country: country }
}

const fetchWeather = async () => {
    let location = getLocation();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${apiKey}`,


        {
            method: 'GET',
            'Content-Type': 'application/json',
        }
    );
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h `;

    if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/haze.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Dust") {
        weatherIcon.src = "images/dust.png";
    }
}




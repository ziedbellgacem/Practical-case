
async function search() {
    const city = document.getElementsByClassName('input')[0].value;
    const weather = document.getElementsByClassName('weather')[0];
    const errorDiv = document.getElementsByClassName('error')[0];
    const nameCity =document.getElementsByClassName('city')[0];
    const temp =document.getElementsByClassName('temp')[0];
    const wind =document.getElementsByClassName('wind')[0];
    const humidity =document.getElementsByClassName('humidity')[0];

    // Example API URL with a query parameter (replace with your API endpoint)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=9273fea960453f4bb44b82d5743c8b32`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (data.cod === 200) {
            // Successful response
            weather.style.display = 'block';
            errorDiv.style.display = 'none';
            nameCity.innerHTML = data.name;
            temp.innerHTML = `${data.main.temp}°C`;
            wind.innerHTML = `${data.wind.speed} km/h`;
            humidity.innerHTML = `${data.main.humidity}%`;
        } else {
            // Invalid city name
            weather.style.display = 'none';
            errorDiv.style.display = 'block';
        }

        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        weather.style.display = 'none';
        errorDiv.style.display = 'block';
    }
}

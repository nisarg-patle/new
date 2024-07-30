const apiKey = '47404f5f37820090cc0976ef09c455a9';

const getweather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById('cloud_pct').innerHTML = data.clouds.all;
            document.getElementById('temp').innerHTML = data.main.temp;
            document.getElementById('feels_like').innerHTML = data.main.feels_like;
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('min_temp').innerHTML = data.main.temp_min;
            document.getElementById('max_temp').innerHTML = data.main.temp_max;
            document.getElementById('wind_speed').innerHTML = data.wind.speed;
            document.getElementById('wind_degrees').innerHTML = data.wind.deg;
            document.getElementById('sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getweather(city);
});

getweather('mehsana');

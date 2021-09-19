const API_KEY = "292dd45577233df05e2dcfb8086de38c"
const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:first-child").nextSibling;    

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    // city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Cant find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

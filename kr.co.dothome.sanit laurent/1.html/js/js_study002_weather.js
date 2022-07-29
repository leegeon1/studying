const API_KEY = "45be51b5cdb27be9e27f176b6cb1802d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        // console.log(data.name, data.weather[0].main);
        // console.log(data.weather[0].description);
    });
}
// 주소에 units=metric 추가함으로 섭씨온도를 얻을 수 있음
// fetch이용하는 방법 .then()를 이용해서 response를 받아야함
// then(response => response.json()의 JSON은 weather api의 preview
function onGeoError(){
    console.log("can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

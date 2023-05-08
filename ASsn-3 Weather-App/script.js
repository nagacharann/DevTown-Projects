console.log(navigator);
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});

const apikey = "d5819fe2873cfd9319b7dbbd93e17e4a";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon1");


const toggles = document.querySelector("#toggledark");
const body = document.querySelector("body");
const icon = document.querySelector("i");
const menu = document.querySelector(".menu");
const anc = document.querySelector("a");
const ul = document.querySelector("#ul");
const ul1 = document.querySelector("#ul1");
const ul2 = document.querySelector("#ul2");
const ul3 = document.querySelector("#ul3");
const ul4 = document.querySelector("#ul4");
toggles.addEventListener("click", function (e) {
  this.classList.toggle("bi-brightness-high-fill");
  if (this.classList.toggle("bi-moon-fill")) {
    //black

    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1.5s";
    icon.style.color = "white";
    menu.style.background = "black";
    menu.style.color = "white";
    menu.style.transition = "1.5s";
    anc.style.color = "white";
    ul.style.color = "white";
    ul1.style.color = "white";
    ul2.style.color = "white";
    ul3.style.color = "white";
    ul4.style.color = "white";
  } else {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1.5s";
    icon.style.color = "black";
    menu.style.background = "white";
    menu.style.color = "black";
    menu.style.transition = "1.5s";
    anc.style.color = "black";
    ul.style.color = "black";
    ul1.style.color = "black";
    ul2.style.color = "black";
    ul3.style.color = "black";
    ul4.style.color = "black";
  }
});

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status === 404) {
    document.querySelector("#error").style.display = "block";
    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector("#filled").style.display = "none";
    document.querySelector("#empty").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".mintemp").innerHTML =
      Math.round(data.main.temp_min) + "°C";
    document.querySelector(".maxtemp1").innerHTML =
      Math.round(data.main.temp_max) + "°C";

    document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
    document.querySelector(".feelslike1").innerHTML = data.main.feels_like;
    document.querySelector(".wind12").innerHTML = data.wind.speed + "Km/hr";

    document.querySelector(".winddeg12").innerHTML = data.wind.deg + "°";

    document.querySelector(".city").innerHTML = "Weather of" + " " + data.name;

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "mist.png";
    }
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector("#error").style.display = "none";
    document.querySelector("#empty").style.display = "none";
    document.querySelector("#filled").style.display = "block";
  }
}

searchbtn.addEventListener("click", () => {
  if (searchbox.value === "") {
    document.querySelector("#empty").style.display = "block";
    document.querySelector("#error").style.display = "none";
    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector("#filled").style.display = "none";
  } else {
    checkweather(searchbox.value);
    document.querySelector("#filled").style.display = "block";
    document.querySelector("#empty").style.display = "none";
    document.querySelector("#error").style.display = "none";
    document.querySelector(".container").style.visibility = "visible";
  }
});

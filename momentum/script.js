// DOM Elements
const time = document.querySelector(".time"),
  greeting = document.querySelector(".greeting"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus"),
  change = document.querySelector(".change"),
  dayNow = document.querySelector(".day-now");

// Options
const showAmPm = true;
let imagesArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

function showDate() {
  let today = new Date(),
    weekDay = today.getDay(),
    day = today.getDate(),
    month = today.getMonth();

  dayNow.innerHTML = `${weekdays[weekDay]}, ${day} ${months[month]}`;

  setTimeout(showDate, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(imagesArr);
imagesArr = imagesArr.slice(0, 6);

for (let i = 0; i < 2; i++) {
  Array.prototype.push.apply(imagesArr, imagesArr);
}

imagesArr = imagesArr.map(addZero);

let globalToday = new Date();
let globalHour = globalToday.getHours();
let x = 0;

if (globalHour < 6) {
  x = 0;
} else if (globalHour < 12) {
  x = 6;
} else if (globalHour < 18) {
  x = 12;
} else if (globalHour < 24) {
  x = 18;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes();
  second = today.getSeconds();

  if (!document.body.style.backgroundImage && hour < 6) {
    document.body.style.backgroundImage = `url('assets/images/night/${imagesArr[0]}.jpg')`;
    greeting.textContent = "Good Night, ";
    document.body.style.color = "white";
  } else if (!document.body.style.backgroundImage && hour < 12) {
    document.body.style.backgroundImage = `url('assets/images/morning/${imagesArr[0]}.jpg')`;
    greeting.textContent = "Good Morning, ";
  } else if (!document.body.style.backgroundImage && hour < 18) {
    document.body.style.backgroundImage = `url('assets/images/day/${imagesArr[0]}.jpg')`;
    greeting.textContent = "Good Afternoon, ";
  } else if (!document.body.style.backgroundImage && hour < 24) {
    document.body.style.backgroundImage = `url('assets/images/evening/${imagesArr[0]}.jpg')`;
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }

  if (hour < 6 && minute == 00 && second == 00) {
    document.body.style.backgroundImage = `url('assets/images/night/${imagesArr[x]}.jpg')`;
    x++;
  } else if (hour < 12 && minute == 00 && second == 00) {
    document.body.style.backgroundImage = `url('assets/images/morning/${imagesArr[x]}.jpg')`;
    x++;
  } else if (hour < 18 && minute == 00 && second == 00) {
    document.body.style.backgroundImage = `url('assets/images/day/${imagesArr[x]}.jpg')`;
    x++;
  } else if (hour < 24 && minute == 00 && second == 00) {
    document.body.style.backgroundImage = `url('assets/images/evening/${imagesArr[x]}.jpg')`;
    x++;
  }

  if (x == 23) {
    x = 0;
  }

  setTimeout(setBgGreet, 1000);

}

/*if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
  */

// Get Name
function getName() {
  if (localStorage.getItem("name") === "") {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === "") {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// Change Background
let p = 0;
if (globalHour < 6) {
  p = 0;
} else if (globalHour < 12) {
  p = 6;
} else if (globalHour < 18) {
  p = 12;
} else if (globalHour < 24) {
  p = 18;
}

console.log(p)

let imagesArray2 = [
  `night/${imagesArr[0]}`,
  `night/${imagesArr[1]}`,
  `night/${imagesArr[2]}`,
  `night/${imagesArr[3]}`,
  `night/${imagesArr[4]}`,
  `night/${imagesArr[5]}`,
  `morning/${imagesArr[0]}`,
  `morning/${imagesArr[1]}`,
  `morning/${imagesArr[2]}`,
  `morning/${imagesArr[3]}`,
  `morning/${imagesArr[4]}`,
  `morning/${imagesArr[5]}`,
  `day/${imagesArr[0]}`,
  `day/${imagesArr[1]}`,
  `day/${imagesArr[2]}`,
  `day/${imagesArr[3]}`,
  `day/${imagesArr[4]}`,
  `day/${imagesArr[5]}`,
  `evening/${imagesArr[0]}`,
  `evening/${imagesArr[1]}`,
  `evening/${imagesArr[2]}`,
  `evening/${imagesArr[3]}`,
  `evening/${imagesArr[4]}`,
  `evening/${imagesArr[5]}`,
];
function ChangeBg() {
  let today = new Date(),
    hour = today.getHours(),
    minute = today.getSeconds();

    p = p + 1;

    if (p === 23) {
      p = 0;
    }

  if (hour < 6) {
    document.body.style.backgroundImage = `url('assets/images/${imagesArray2[p]}.jpg')`;
  } else if (hour < 12) {
    document.body.style.backgroundImage = `url('assets/images/${imagesArray2[p]}.jpg')`;
  } else if (hour < 18) {
    document.body.style.backgroundImage = `url('assets/images/${imagesArray2[p]}.jpg')`;
  } else if (hour < 24) {
    document.body.style.backgroundImage = `url('assets/images/${imagesArray2[p]}.jpg')`;
  }

  

 

  

}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
change.addEventListener("click", ChangeBg);

// если смена цитаты у вас не работает, вероятно, исчерпался лимит API. в консоли ошибка 403
// скопируйте код себе и запустите со своего компьютера
const blockquote = document.querySelector("blockquote");
const figcaption = document.querySelector("figcaption");
const btn = document.querySelector(".btn");

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked
async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = `"${data.quoteText}"`;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener("DOMContentLoaded", getQuote);
btn.addEventListener("click", getQuote);

// Weather

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const humidity = document.querySelector(".weather-humidity");
const windSpeed = document.querySelector(".wind-speed");
const city = document.querySelector(".city");
const weatherBlock = document.querySelector(".weather")


city.addEventListener('focus', function() {
  city.textContent = "";
})

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = "weather-icon owf";
  if (data.weather) {
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  
  temperature.textContent = `${data.main.temp}°C`;
  humidity.textContent = `${data.main.humidity}%,`;
  windSpeed.textContent = `${data.wind.speed}m/s`;
  weatherDescription.textContent = data.weather[0].description;
  } else {
    temperature.textContent = "";
  humidity.textContent = "";
  windSpeed.textContent = "";
  weatherDescription.textContent = "";
    city.textContent = 'incorrect city name'.toUpperCase();
  }
  
}

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);

function getCity() {
  city.textContent = localStorage.getItem("city");
}

function setCity(e) {
  if (city.textContent != '') {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      getWeather();

      localStorage.setItem("city", e.target.innerText);

      city.blur();
    }
  } else {
    getWeather();

    localStorage.setItem("city", e.target.innerText);
  }
} else {
  if (e.type === "keypress") {
  if (e.keyCode == 13) {
    city.textContent = localStorage.getItem("city");
    getWeather();
    city.blur();
  }
}
}
}



// Run
showTime();
setBgGreet();
getName();
getFocus();
getWeather();
getCity();
showDate();

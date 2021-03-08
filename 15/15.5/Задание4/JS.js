//получаем переменные
let timeZone = document.querySelector(".Timezone")
let localDateTime = document.querySelector(".localDateTime")
let btn = document.querySelector(".btn")
let latitude  ;
let longitude  ;
let dataTimeZone ;

//обработчик для кнопки
btn.addEventListener("click", () => {
	//проверяем данные по геолокации
	//если данные есть то, получаем широту и долготу 
	
	if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(success, error); } 
	
	
 })
//выполнение запроса для получения данных по локации и местному времени
//и выводим эти данные на страницу
function getTimeZoneAPI(latitude, longitude) {
	console.log("ok")
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
        .then((response) => { return response.json(); })
        .then((data) => { 
        	dataTimeZone = data;
        	timeZone.insertAdjacentHTML ('afterbegin',`${dataTimeZone.timezone}`);
        	localDateTime.insertAdjacentHTML ('afterbegin',`${dataTimeZone.date_time_txt}`);
        })
        .catch(() => { console.log('error') });
}

//всопомгательные функции
function success (position) {
	localDateTime.innerHTML = '';
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	// вызов функции для выполнения запроса
	getTimeZoneAPI(latitude, longitude);
}

function error () {
  timeZone.innerHTML = '';
  timeZone.insertAdjacentHTML ('afterbegin','Location information is not available');
}
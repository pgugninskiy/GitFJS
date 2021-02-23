//получаем переменные
let timeZone = document.querySelector(".Timezone")
let localDateTime = document.querySelector(".localDateTime")
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
	if (!navigator.geolocation) {  } 
		else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
 })


function success (position) {
	localDateTime.innerHTML = '';
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	localDateTime.insertAdjacentHTML ('afterbegin',`latitude: ${latitude} , longitude: ${longitude} `);
}

function error () {
  localDateTime.innerHTML = '';
  localDateTime.insertAdjacentHTML ('afterbegin','Location information is not available');
}
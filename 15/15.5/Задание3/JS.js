//получаем переменные
let screenSize = document.querySelector(".screenSize")
let divGeolocation = document.querySelector(".divGeolocation")
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
	ScreenSize ()
	if (!navigator.geolocation) {  } 
		else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
 })


function ScreenSize () {
	screenSize.innerHTML = '';
	screenSize.insertAdjacentHTML ('afterbegin',`width: ${window.screen.width}, height: ${window.screen.height}   `);
}

function success (position) {
	divGeolocation.innerHTML = '';
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	divGeolocation.insertAdjacentHTML ('afterbegin',`latitude: ${latitude}, longitude: ${longitude}   `);
	
}
function error () {
  divGeolocation = '';
  divGeolocation.insertAdjacentHTML ('afterbegin','Location information is not available');
}
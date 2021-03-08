//создаем переменные
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let btnGeo = document.querySelector(".btnGeo")
let outPut = document.getElementById("output")
const wsUri = "wss://echo.websocket.org/";

let webSocket;

//обработчик для кнопки Отправить
btn.addEventListener("click", () => {
	websocket = new WebSocket(wsUri);
	//вызываем функцию для отправки сообщения
	websocket.onopen = (evt) => {
    	userMessage();
  	};
	
	//обработка события при получении события от сервера
  	websocket.onmessage = (evt) => {
    	serverMessage(
      		'<span style="color: blue;">Сообщение сервера: ' + evt.data+'</span>'
    	);
    	
  	 };
	 	
})

serverMessage = (message) => {
	outPut.insertAdjacentHTML('beforeend', `<div class="output" style = "text-align: left;" >${message}</div><br>`);
 	
}

userMessage = () => {
	outPut.insertAdjacentHTML('beforeend', `<div class="output" style = "text-align: right;" >Сообщение отправителя:  ${input.value}</div><br>`);
  	websocket.send(input.value);
}

//обработчик для кнопки Гео-локация
btnGeo.addEventListener("click", () => {
	if (!navigator.geolocation) {  } 
		else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
	 	
})

success = (position) => {
	
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	outPut.insertAdjacentHTML ('beforeend',
		`<div class="output" style = "text-align: right;"  
			>Данные гео-локации:  
			<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}"> https://www.openstreetmap.org/</a>
		</div><br>`);
							
}
error = () => {
  
  outPut.insertAdjacentHTML ('afterbegin',`<div class="output" style = "text-align: right;" >Данные гео-локации:  Location information is not available </div><br>`);
}

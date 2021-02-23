// объявление переменных
let strPage = document.getElementById("strPage");
let limit = document.getElementById("limit");
let btn = document.getElementById("btn");
let div = document.getElementById("div");
let link = 'https://picsum.photos/v2/list?...'
let arrData = [];

//обработчик
btn.addEventListener('click', () =>{
	div.innerHTML = ""
	//проверяем заполнены ли корректно поля для ввода
	if (!(+strPage.value > 0 && +strPage.value < 10 && typeof +strPage.value === "number") &&
			(+limit.value > 0 && +limit.value < 10 && typeof +limit.value === "number")
		) {pageOutOfRange ()}
	else if (!(+limit.value > 0 && +limit.value < 10 && typeof +limit.value === "number")&&
		(+strPage.value > 0 && +strPage.value < 10 && typeof +strPage.value === "number")
		) {limitOutOfRange ()}
	else if (!(+strPage.value > 0 && +strPage.value < 10 && typeof +strPage.value === "number") &&
			!(+limit.value > 0 && +limit.value < 10 && typeof +limit.value === "number"))
		  {pageLimitOutOfRange ()}
	else {getPicture ()}

	}
);
// получе массива с картинками
function getPicture () {
	fetch(link.replace('...', `page=${+strPage.value}&limit=${+limit.value}`))
  .then((response) => { return response.json(); })
  .then((data) => { 
  		arrData = data;
  		dispPicture(arrData);
   })
  .catch(() => { console.log('error') });
} 
//вывод картинок на страницу
function dispPicture () {
	for (let i in arrData) {
		div.insertAdjacentHTML('beforeend', 
			`<img 
			src="${arrData[i].download_url}" 
			width="${arrData[i].width/13}" 
			height="${arrData[i].height/13}" 
			alt="${arrData[i].author}"
			>`);
		div.insertAdjacentHTML('beforeend', '<br><br>') 
	}
}
//вывод сообщения об ошибке номера страницы
function pageOutOfRange () {
	div.insertAdjacentHTML(
		'beforeend', '«Номер страницы вне диапазона от 1 до 10»')
	div.insertAdjacentHTML('beforeend', '<br><br>')
}
//вывод сообщения об ошибке лимита
function limitOutOfRange () {
	div.insertAdjacentHTML(
		'beforeend', '«Лимит вне диапазона от 1 до 10»')
	div.insertAdjacentHTML('beforeend', '<br><br>')
	
}
//вывод сообщения об ошибке номера страницы и лимита
function pageLimitOutOfRange () {
	div.insertAdjacentHTML(
		'beforeend', '«Номер страницы и лимит вне диапазона от 1 до 10»')
	 
}
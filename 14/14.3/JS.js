let selectYear = document.getElementsByTagName("select")
let btn = document.getElementById("btn")
let Quartal = document.getElementById("classQ")

let Q1 = document.getElementById("Q1")
let Q2 = document.getElementById("Q2")
let Q3 = document.getElementById("Q3")
let Q4 = document.getElementById("Q4")
let dataJSON = []

// Создаем экзепляр класса XMLHttpRequest
let xhr = new XMLHttpRequest();

// Инициализируем запрос
xhr.open('GET', 'https://raw.githubusercontent.com/pgugninskiy/GitFJS/master/14/14.3/data.json')
// // Отправляем запрос
xhr.send();
// Создаем объект для хранения результата запроса
xhr.onload = () => {dataJSON = JSON.parse(xhr.response);}
// Инициализируем переменные для хранения ссылок на объекты ДОМ
//Добавляем обработчик для кнопки
btn.onclick = () => {
    for (let i = 0; i < 4; i++){
      console.log(dataJSON[i])
    }
	   	if (selectYear[0].value == "") {
	      alert("Выберите, пожалуйста, год")
	      } else if (selectYear[0].value == "2017") {
	          Q1.innerText = dataJSON[0].sales["q1"]
	          Q2.innerText = dataJSON[0].sales["q2"]
	          Q3.innerText = dataJSON[0].sales["q3"]
	          Q4.innerText = dataJSON[0].sales["q4"]
	      } else if (selectYear[0].value == "2018") {
	          Q1.innerText = dataJSON[1].sales["q1"]
	          Q2.innerText = dataJSON[1].sales["q2"]
	          Q3.innerText = dataJSON[1].sales["q3"]
	          Q4.innerText = dataJSON[1].sales["q4"]
	      } else if (selectYear[0].value == "2019") {
	          Q1.innerText = dataJSON[2].sales["q1"]
	          Q2.innerText = dataJSON[2].sales["q2"]
	          Q3.innerText = dataJSON[2].sales["q3"]
	          Q4.innerText = dataJSON[2].sales["q4"]
	      }
//Добавляем новый элемент на страницу после нажатия на кнопку
      const content = "Привет!"
      const parent = document.getElementById("link");

// добавляем ссылку для перехода на визуализцию данных
      if (selectYear[0].value != "") {
      parent.innerHTML = `<a href="https://quickchart.io/chart?c=
{
  type:'bar',
  data:
    {
      labels:['1кв','2кв','3кв','4кв'], 
      datasets:[
          {
          label:'Выручка за ${selectYear[0].value} год',
          data:['${Q1.textContent}','${Q2.textContent}','${Q3.textContent}','${Q4.textContent}'],
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(255, 99, 132)',
          }
          ]
    }
}"> Открыть график </a>`;
}
}

// объявляем переменные, приводим их к нужному типу
let btn = document.getElementById("btn");
let idUser = document.getElementById("idUser");
let dataJSON = [];
let dataId = [];

//пишем обработчик для кнопки
btn.addEventListener('click', () => {
  // по клику делаем запрос к данным
  fetch('https://jsonplaceholder.typicode.com/users/3/todos')
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON  
      dataJSON = data;
      // т.к. данные по ИД лежат во вложенном масиве, то получаем отдельный массив ИД
      for (let i in dataJSON) { dataId.push(dataJSON[i].id) }
      
      // делаем проверку массива ИД на наличие введенного значения
      // если значение есть в массиве, то выводим задачу для этого значени ИД
      if (dataId.includes(Number(idUser.value))) {

        for (let i in dataJSON) {
          if (dataId[i] == Number(idUser.value)){div.insertAdjacentHTML('beforeend', `<ol><s>${dataJSON[i].title}</s><ol>`);}
                 
                  }}
      // если значения ИД нет, то выводим соответствующее сообщение 
      else {div.insertAdjacentHTML('beforeend', `<ol>"Пользователь с указанным id не найден" <ol>`) }
 
        } )

    .catch(() => { console.log('error')})  ;
});

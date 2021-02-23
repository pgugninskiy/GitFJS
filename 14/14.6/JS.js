// объявляем переменные
let btn = document.getElementById("btn");
let idUser = document.getElementById("idUser");
let dataJSON = [];
let dataId = [];
let str = 'https://jsonplaceholder.typicode.com/users/...';

// обработчик для кнопки
btn.addEventListener('click', () => { 
  div.innerHTML = ""
  checkID() 
});

// функция для проверки ИД пользователя
checkID = () => {
  
  // выполняем запрос к списку пользовательских ИД
  
  fetch(str.replace('...',``))
  .then((response) => { return response.json(); })
  .then((data) => { 
    // создаем доп массив. не знаю зачем, но без него не работает
    dataJSON = data
    // вытаскиваем ИД и заполняем циклом новый массив
    for (let i in data) { dataId.push(dataJSON[i].id) }  
    //проверяем специальным методом наличие значения введенного пользователем
    if (dataId.includes(Number(idUser.value))) {
    // если всё ОК, то вызываем функцию для получения списка задач пользователя
         getToDo ()  
                                        } 
    // если всё не ОК, то выводим соответствующее сообщение
    else {
      div.innerHTML = '';
      div.insertAdjacentHTML('beforeend', `<ol>"Пользователь с указанным id не найден" <ol>`) }             
                  })
  .catch(() => { console.log('error') });
};
// функция для получения списка задач пользователя
getToDo = () => {
    fetch(str.replace('...',`${idUser.value}/todos`))
    
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {
        // Объект результата в формате JSON  
        dataJSON = data;
        for (let i in dataJSON) { dataId.push(dataJSON[i].id) }

        // выводим список задач этого пользователя
        insertToDo (dataJSON)
        
           } )

      .catch(() => { console.log('error')})  ;
};
// функция для вставки тэгов на страницу
insertToDo = () => {
  for (let i in dataJSON) {
          div.insertAdjacentHTML('beforeend', `<ul>`);
          div.insertAdjacentHTML('beforeend', `<li>"userId":${dataJSON[i].userId}</li>`);
          div.insertAdjacentHTML('beforeend', `<li>"id":${dataJSON[i].id}</li>`);
          if (!dataJSON[i].completed) {
          div.insertAdjacentHTML('beforeend', `<li>"title":${dataJSON[i].title}</li>`);}
          else {div.insertAdjacentHTML('beforeend', `<li>"title":<s>${dataJSON[i].title}</s></li>`);}

          div.insertAdjacentHTML('beforeend', `<li>"completed":${dataJSON[i].completed}</li>`);  
          div.insertAdjacentHTML('beforeend', `</ul>`);
        }
};
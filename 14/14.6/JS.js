
let btn = document.getElementById("btn");
let idUser = document.getElementById("idUser");
let dataJSON = [];

btn.addEventListener('click', () => {
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/users/3/todos')
    .then((response) => {
      // Объект ответа на запрос
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON  
      dataJSON = data;

      for (let i in dataJSON) {
          
          if (dataJSON[i].id == idUser.value) {
          div.insertAdjacentHTML('beforeend', `<ol><s>${dataJSON[i].title}</s><ol>`);
            } else if (dataJSON[i].id != idUser.value) {
         console.log ("Пользователь с указанным id не найден")
          } 
          
        }
      }
      )

    .catch(() => { console.log('error') });
});




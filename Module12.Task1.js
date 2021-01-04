const obj = {
  city: "Novosib",
  adress: "ul. Mira",
  number: 12345678  
}

const user = Object.create(obj)

user.Name = "Ivanov"

function getKey (obj){
  for (let key in obj){
   
    if (obj.hasOwnProperty(key)){
        console.log(`${key} - ${obj[key]}`)
    }
  }
}

getKey(user)

// Всё верно, но есть небольшая неточность: по заданию нужно было вывести в консоль ключи и значения собственных свойств, а у вас выводится только ключ. Добавила в код вывод значения
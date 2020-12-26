/*Задание 2.
Написать функцию, которая принимает 
в качестве аргументов строку и объект, 
  а затем проверяет есть ли у переданного 
  объекта свойство с данным именем.
Функция должна возвращать true или false. */

function checkNameObj(str,obj){
  let arr = Object.keys(obj)
    if (arr.includes(str) == true){
      console.log("true")
    } else {console.log("false")}
}

const obj = {
  city: "Novosib",
  adress: "ul. Mira",
  number: 12345678  
}

let str = prompt("enter property")

checkNameObj(str,obj)

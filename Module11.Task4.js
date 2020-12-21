let a = prompt('please')
a=+a
let b = prompt('please')
b=+b
let intervalID = window.setInterval(getNumbers,1000,a)

function getNumbers (){
  console.log(a)
  if (a==b){
    clearInterval(intervalID)}
  a = a + 1
}

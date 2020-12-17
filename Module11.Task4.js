let a = prompt('please')
let b = prompt('please')
let interval = (b-a+1)*1000 
let intervalID = window.setInterval(getNumbers,1000,a++)

setTimeout(function(){
  clearInterval(intervalID)
},interval)

function getNumbers (a){
  a=+a
  console.log(a)
}

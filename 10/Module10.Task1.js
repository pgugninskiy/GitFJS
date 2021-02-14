let x = prompt("plese enter number")
let y = +x
console.log(y)
if (isNaN(y)==false){
  if(y%2==0){console.log("четное")}
    else {console.log("не четное")}
}else {console.log("Упс, кажется, вы ошиблись")}
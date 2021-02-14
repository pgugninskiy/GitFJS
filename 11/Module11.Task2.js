function getSimple(){
  let a = prompt("please")
  a = + a
  if (a > 1000){
    console.log(a+" not correct number")
  }else if (a > 1){
    if ((a % 2 == 0 || a % 3 == 0) && a>3){
      console.log(a+" not simple")
    }else {
      console.log(a+" simple")
    }
  }else {
    console.log(a+" not simple")
  }
}

getSimple()
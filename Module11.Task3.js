function getSum (callback){
  
   num1 = callback(); 
   num1 = +num1
  
  return function(num){
    num = prompt("plese enter number")
    num=+num; 
    
    console.log(num1 + num)
   }
}

function argFunc(num){
  num = prompt("plese enter number")
  num=+num
  return num
  }

const resultFunc = getSum(argFunc);

resultFunc();

let base = prompt('please')
base =+ base
let exp = prompt('please')
exp =+ exp

getPow=(base,exponent)=>{
  if (Number.isInteger(base) && Number.isInteger(exponent)){
  console.log(Math.pow(base,exponent))
  }else {console.log("numbers are not integer")}
}
getPow(base,exp)


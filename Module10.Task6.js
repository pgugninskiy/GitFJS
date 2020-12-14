let arr1 = [1,1,1,1,1]
let result=1;

for (let i=0; i<arr1.length; i++) {
  if (arr1[i]==arr1[i+1]){
  result++}
 }
if (result==arr1.length)
  {console.log("true")}
else
  {console.log("false")}

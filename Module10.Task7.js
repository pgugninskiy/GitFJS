let arr1 = ["!","+","b",1,2,3,4,5,6,null]
let even=0;
let odd=0;

for (let i=0; i<arr1.length; i++) {
  if(typeof(arr1[i])==='number')
    {
      if(arr1[i]%2==0)
        {even++} else {odd++}
    }
    
}
console.log(even)
console.log(odd)
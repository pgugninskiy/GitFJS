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
        console.log(key)
    
    }
  }
}

getKey(user)
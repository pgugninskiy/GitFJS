class HomeThings{
	constructor(){
  this.color,
  this.weight,
  this.power,
  this.material,
  this.turnOn = false
	}
}

const lamp = new HomeThings
lamp.name = "lamp"
lamp.color = "blue"
lamp.weight = 1
lamp.power = 60
lamp.material = "metal"

const tvSet = new HomeThings
tvSet.name = "tvSet"
tvSet.color = "white"
tvSet.weight = 5
tvSet.power = 145
tvSet.material = "plastic"

const stove = new HomeThings
stove.name = "stove"
stove.color = "black"
stove.weight = 20
stove.power = 5960
stove.material = "metal"

const teapot = new HomeThings
teapot.name = "teapot"
teapot.color = "red"
teapot.weight = 0.5
teapot.power = 60
teapot.material = "metal"

let nameThing = prompt("Введите название прибора для включения")

function TurnOn (nameThing){
    switch (nameThing){
      case "lamp": 
        lamp.turnOn=true; 
        console.log(`${nameThing} is turn on. Power is ${lamp.power}`); 
        break;
      case "tvSet": 
        tvSet.turnOn=true; 
        console.log(`${nameThing} is turn on. Power is ${tvSet.power} `); 
        break;
      case "stove": 
        stove.turnOn=true; 
        console.log(`${nameThing} is turn on. Power is ${stove.power}`); 
        break;
      case "teapot": 
        teapot.turnOn=true; 
        console.log(`${nameThing} is turn on. Power is ${teapot.power}`); 
        break;
      default: 
        console.log("Такого предмета нет");
    }  
    
    
}

TurnOn(nameThing)


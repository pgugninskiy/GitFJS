function HomeThings(){
  this.color,
  this.weight,
  this.power,
  this.material,
  this.turnOn = false
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

// Задание выполнено неверно. Нужно было написать функции-конструкторы: родительскую и дочерние, и объединить их с помощью прототипного наследования. Ниже пример верного решения:

function ElectricalApp(name){
  this.name = name
}

ElectricalApp.prototype.turnOn = function (){
  console.log(`${this.name} is turned on`);
}

ElectricalApp.prototype.turnOff = function (){
  console.log(`${this.name} is turned off`);
}

function Lamp (name, color, weight, brightness){
  this.name = name,
  this.color = color,
  this.weight = weight,
  this.brightness = brightness
}

Lamp.prototype = new ElectricalApp();

Lamp.prototype.getPowerConsumption = function(){
  if (this.brightness <= 70){
      console.log("Power consumption is 20 watt");
  } else if( brightness >  70){
      console.log("Power consumption is 10 watt");
  }
}

function Computer (name, color, weight, model){
  this.name = name,
  this.color = color,
  this.weight = weight,
  this.model = model
}

Computer.prototype = new ElectricalApp();

const lamp = new Lamp('Small Lamp', 'white', 1000, 70);

lamp.getPowerConsumption();

const computer = new Computer ('Laptop', 'black', 3000, 'Lenovo');

lamp.turnOn();
lamp.turnOff();

computer.turnOn();
computer.turnOff();
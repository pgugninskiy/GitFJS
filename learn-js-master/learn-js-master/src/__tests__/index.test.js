import {getSimple} from "../index.js";

describe ('test for function getSimple',  ()=> {
	it ("simple number", ()=>{
		expect(getSimple(7)).toBe("7 is simple")})

})

import {getPifagor} from "../index.js";

describe ('test for function getPifagor',  ()=> {
	it ("right triangle", ()=>{
		expect(getPifagor(1,2,3)).toBe("Это прямоугольный треугольник!")})
	it ("not right triangle", ()=>{
		expect(getPifagor(2,2,3)).toBe("Это не прямоугольный треугольник!")})
})

import {getMaxNum} from "../index.js";

describe ('test for function getMaxNum',  ()=> {
	it ("max a", ()=>{
		expect(getMaxNum(3,2,1)).toBe("max is a")})
	it ("max b", ()=>{
		expect(getMaxNum(1,3,2)).toBe("max is b")})
	it ("max c", ()=>{
		expect(getMaxNum(1,2,3)).toBe("max is c")})
})

import {evenNumber} from "../index.js";

describe ('test for function evenNumber',  ()=> {
	it ("even", ()=>{
		expect(evenNumber(6)).toBe("Число 6 четное!")})
	it ("not even", ()=>{
		expect(evenNumber(123)).toBe("Число 123 нечетное!")})
})
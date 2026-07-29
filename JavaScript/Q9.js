
// let learning = (a, b) => a + b;//arrow function
// console.log(learning(4, 5));

// topic2 IIFI(Immediate invoked function expression)
// (function (){
//     console.log("this is iifi")
// })();

// //topic 3 Call stack
// function first(){
//     console.log("first")
//     second()
//     console.log("first function again")
// }
// function second(){
//     console.log("second")
//     third()
//     console.log("second agin")
// }
// function third(){
//     console.log("third")
// }
// first()

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("JavaScript"));
// function square(number){
//     return number*number
// }
// console.log(square(5))

//Q21. Temperature Converter
// Write two standard functions:
// 1. celsiusToFahrenheit(celsius) that takes a temperature in Celsius and returns it in Fahrenheit.
// 2. fahrenheitToCelsius(fahrenheit) that takes a temperature in Fahrenheit and returns it in Celsius.
// function celsiustofrahneight(celsius){
//     return (celsius*9/5)+32
// }
// function frahneighttocelsius(frahneight){
//     return (frahneight-32)*5/9
// }
// console.log(celsiustofrahneight(25))
// console.log(frahneighttocelsius(77))

//Array
// const arr = [1,4,5,6,7];//1st syntax to dexalre aaray
// console.log(typeof arr);
// console.log(Array.isArray(arr))
// const arr1 = new Array();//2nd syntaax
// arr1[0]=3
// console.log(arr1)

// const arr3 = new Array(3);//3rd
// arr3[0]="kjb"
// arr3[1]="3423"
// arr3[2]="were"
// arr3[3]="fsd"
// console.log(arr3)

// const arr4= Array.of(4,4,4,5)//4 syntax
// console.log(arr4)

//array methods
// const arrmethod = ['a','b','c','d','e'];
// arrmethod.push('q')
// // console.log(arrmethod)
// // arrmethod.pop()
// // arrmethod.pop()
// // console.log(arrmethod)
// arrmethod.unshift('pri')
// console.log(arrmethod)

const concationarray =[1,2,3,4,5]
let concat2 =[3,4,5]
//const final = concationarray +concat2
//console.log(typeof final)
//console.log(final)
concat2 =[...concationarray,...concat2]
console.log(concat2)
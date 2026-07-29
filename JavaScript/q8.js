// //1 topic //polyfill -A polyfill is extra JavaScript code that adds a feature to old browsers if they don't already have it.

// // Think of it like this:

// // 🛠️ Polyfill = A helper that gives old browsers new powers.

// //2topic
// // mah();   // ✅ Ye chalega (hoisting)
// // // abc()
// // function mah) {
// //     console.log("hello i am 4th year student");//normal function
// // }

// // const abc = function() {
// //     console.log("hello i am function expression");//expression function
// // }

// //3topic
// // function mah(a,b){//using arguments
// //     return a+b;
// // }
// // console.log(mah(4,5))

// //4th topic
// function mah(...numbers){
//     return numbers.reduce((a,b)=>a+b,0)//reduce return single
// }
// // console.log(mah(a,b))// nahi chalega
// // console.log(mah(7,4))//chalega
// console.log(mah(7,4,1,2,5,6,7,8,9,0,5))//sum ayega-fully depend on number argument

//5th topic
// function vowel(str) {
//     return str.match(/[aeiou]/gi).join("");
// }

// console.log(vowel("shhjhsklvnkhvfnvkfhvuvklrmijnjbwffkwniorwgnwkngihdknvvhifweiv"));

//6th topic call by function
// function greeting(hello , callb){
//     let processed= hello.toUpperCase();
//     console.log(processed)
//     console.log(callb())
// }
// function callb(){
//     return "hello i am callbacck"

// }
// greeting("hello",callb)
// function  newfun(){
//     return function nayafun(){
//         console.log("i am new function")
//     }
// }
//There are 2 Higher-Order Functions in your code.
//1. greeting() ✅ Higher-Order Function
// Why?
// Because it accepts another function (callb) as an argument.
// 2. newfun() ✅ Higher-Order Function
// Why?
// Because it returns another function.

function newfun(number){
    return function nayafun(factor){
        return number *factor
    }
}
console.log(newfun(3)(5))

// 7th topic pure and impure function
// var c=5;
// function pure(a,b){
//     return a+b;

// }
// function impure(...a,b){
//     return a+b*c
// }
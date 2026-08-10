// const arr =[2,2,4,5,6,45,3,56];//reduce function and amp function
// // const arr2 = arr.map((a)=>a*a)
// // console.log(arr2)
// const arr2=arr.reduce((a,b)=>a+b,0)
// console.log(arr2)

//topic 2 
// const arr =[12,4,5,["dfsd","fgs",[433242,534,4,[53,534]],43,true,[34,5,34,6,776,],[843,"sdfas"]]]
// // const[num1, ,num2] =arr;
// // console.log(typeof(num1))
// // console.log(typeof num2)
// console.log(arr.flat(Infinity));

// const obj ={
//     name : "maahesh",
//     age : 27,
// }
// const obj3 ={}
// obj3.name="prinncee";
// obj3["age"]=44
// delete obj3.name
// console.log(obj3) 
//  const obj ={
//     name :"mahesh",
//     age : 27,
//     married :false,
//     newfun: function(){
//         return()=>{
//         //console.log(`this is calling a value ${this}`)
//         console.log(`this is nested arrow fuction ${this.married}`)
//         }
//     }
//  }
// console.log(obj.newfun())con

const car ={
    name :"niraj",
    age : 34,
    duniya : "gola hai",
}
for (let obj in car){
    console.log(obj,car[obj]);
}
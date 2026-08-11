// const button = document.getElementById('btn')
// btn.addEventListener("mousedown",function())

const inputtext = document.querySelector('#inputText')
const btn =document.querySelector('#btnform')

btn.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("form submitting")
})

//event.preventDefault()
//stop propogation
//event bubbling
//event capturing
// event delegation
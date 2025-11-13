//Primitive
// 7 types :
//String , number, boolean,null,undefined,symbol,BigInt(used for scientifc values which can't be handled with int)
//Java script is dynamically typed language as variable type is allocated during the tym of execution itself not during compilation phase
// in comparison to compare strictly whethere two variables are equal or not we use ===(example a===b)
//if we declare 2  symbols containing same value but different variable declaration if we use then they both won't be equal
const id= Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
//Reference(non-primitive)
const heros=["lavanya","uday","selvon"]
let myObj={
    name : "Laavs",
    age :20,
}
const myFunction=function(){
    console.log("Hello world")
}
//null =>type of operator for this is object
//// Memories - 2 types=> Stak,Heap
// Stack-primitive dataype
// Heap - non-primitive
let myyoutube="lavanya"
let another=myyoutube
another="lavvs"
console.log(myyoutube)
console.log(another)
// non-primitive(Heap)
let userOne={
    email:"lava@gmail.com",
    upi:"user@axl"
}
let userTwo=userOne
userTwo.email ="lavsss@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

const user={
    username:"Lavanya",
    price:1000000,
    welcomeMessg: function(){
        console.log(`${this.username}, welcome to this webpage`)
        console.log(this)
    }

}
/// this is used to refer current contexxt
user.welcomeMessg()
user.username="lavsssss"
user.welcomeMessg()
console.log(this)
function chhh(){
    let username="lavanya"
    console.log(this)
}
chhh()//here the thing is that if we use this inside any function then we'll get more info about global scope and all tho we use this.username there will be not much change
// => this is the representation of arrow function
 //Arrow Function in JavaScript:
//A shorter way to write functions using the => syntax. It does not have its own this, arguments, or prototype.

//Syntax:
//const functionName = (parameters) => expression;

//Example:
//const add = (a, b) => a + b;
const addTwo=(num1,num2) =>{
    return num1+num2
} // instead of writing all this we can simply write const add = (a, b) => a + b; this is called implicit and if we use return keyword like above it is called explicit


console.log(addTwo(5,9))


const mySym=Symbol("key1")
const JsUser={
    name:"Lavanya",
    [mySym]:"mykey1",//to use symbol type of objects we need to write that declared one inside the square brackets or else it will be treated as a string
    age:20,
    loc:"Vizag",
    email:"lav@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mon","Sat"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
//to overwrite a particualr value mean replace the value of declared variable we use exmple:
JsUser.email="lavanya@google.com"
//Object.freeze(JsUser)
JsUser.email="123@gmail.com"//this will not be updated as we used freeze to freeze that mail
console.log(JsUser)
JsUser.greeting=function(){
    console.log("Hello Js User")
}//for  greetings this is one function
JsUser.greet2=function(){
    console.log(`Hello miss,${this.name}`)//here we use `this istead of double inverted commas and ,${this.whatever feature we wanna get}

}
console.log(JsUser.greeting())
console.log(JsUser.greet2())
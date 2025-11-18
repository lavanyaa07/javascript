const tinderUser = new Object()
tinderUser.id="123abc"
tinderUser.name="lavanya"
const obj1={1: "a", 2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)//merges and returns a new object array
const obj3={...obj1,...obj2}//we use this spread method most of the times which is very easy works the same as above one and easy just spreading
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogged'))//we use .hasOwnProperty to know whether that value exists or not
const course={
    coursename :"java script",
    price:"600",
    courseBy:"Lavanya"
}
const{courseBy : courseein}=course//to change particular value declaration to another we use this here we changed courseBy to courseeein
console.log(courseein)


let score=44
console.log(typeof score)
// "33" can be converted into number 33 but "33abc" cant be converted into number tho converted it gives output not applicable
// true =1 and false=0; conversion for boolean values
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// ""=>mean empty strimg to boolean results false
//"Lavanya" to boolean results true
let somenumber=33
let stringNumber =String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)
//// Operations 
let value=3
let negvalue=-value
console.log(negvalue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2%3)
let str1="Lavanya"
let str2="Puppala"
let str3=str1+str2
console.log(str3)
console.log(1+"2"+2)//o/p 122
console.log(1+2+"2")//here 32o/p
console.log("1"+2+2)//here o/p 122
// what happens is here first value what we assign string or num based on that next value will be taken mean if first is num second also num is there then addition happens if incase first is string second is num and then in that case adddition will npt take place just string will be displayed mean nums willl be displayed just sidewise

let game=100
game++
console.log(game)
//here game++ or ++game both gives samme o/p
//diff is that prefix -first gives result whereas postfix gives result after usage

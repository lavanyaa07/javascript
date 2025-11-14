const score=400
//if we want soemthing to be declareed as particular datatype mean fixing that datatype value without any change we use new String/Number
const bal=new Number(100)
console.log(bal.toString().length)
console.log(bal.toFixed(2))
//toFixed for how many decimal values we want after dot
const num=123.55432
console.log(num.toPrecision(4))
const hun=10000000
console.log(hun.toLocaleString('en-IN'))
//here we will get that indian standard form mean 10,00,000 like this
//////////MAATTTTTHHHHHHHHHSSSSSSSSSSSSss???????????
console.log(Math)
//it(math) is an object which contains so many values likee.pie(),round(),.sqrt(),etc
console.log(Math.abs(4))//abs=gives -ve if +ve value ia there and vice versa
console.log(Math.abs(-44))
console.log(Math.round(4.8))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.sqrt(25))
console.log(Math.random())//comes values btw 0 and 1 mostly decimal
console.log((Math.random()*10)+1)//if we want values
const min =10
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min)



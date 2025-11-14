const name="Lavanya"
const count=50
console.log(name + count+"Puppala")
console.log(`Heloo am ${name} and my repo count is ${count} `)
const gameName=new String('lavanya')
console.log(gameName.toUpperCase())
// it will convert that to upper case letters if we want length of that we will write .length
console.log(gameName.charAt(2))
console.log(gameName.length)
console.log(gameName.lastIndexOf('n'))
const newString=gameName.substring(0,5)
console.log(newString)
// .substring(first index to start the string from,last index+1 where we wanna stop that)
const a=gameName.slice(-8,4)
console.log(a)
// we can use -ve values in slice but not in substring
const b="          Lavanya     "
// to ignore unwanted space in the beginnng and end we will use trim()
console.log(b.trim())
const url="https://lavkkhh"
console.log(url.replace('vk','nya'))
console.log(url.includes('lav'))
//here we use replace('the value which we wanna change','the new value we wanna add in place of the replaceble value')
//.includes('to chechk whether the part inside this paranthesis is present or not mean acts as contains')
console.log(gameName.split('a'))

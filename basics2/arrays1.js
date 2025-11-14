const myArr=[0,1,2,3,'lav','r',6]
//we can also add elements here  mean mutable
console.log(myArr[0])
//shallow copy-shares the same refernce
console.log(myArr)
myArr.push(6)//to add values we use push
console.log(myArr)
myArr.pop()//to remove last value in an array
myArr.unshift(9)//to add at first mean starting index
console.log(myArr)
console.log(myArr.shift())//.shift is used to pop first index value
console.log(myArr.includes(9))//chechk whther that element is there or not in that arr gives t/f
console.log(myArr.join())//converts array to string
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
console.log(myArr.splice(1,3))
console.log("C",myArr)
// if we use slice there will be no impact on original array but if we use splice the impact will be there on original array mean the original array changes== it will manipulate the original array



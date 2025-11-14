let mydate=new Date()
// to get todays date
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(typeof mydate)
let myCreatedDate=new Date(2025,0,25)
// mean month starts from 0 here and 25 is date 
//let myCreaedDate=new Date(2025,0,25,6,3)//6 is tym in hours,3 is in mins
console.log(myCreatedDate.toDateString())
console.log(mydate.getMonth()+1)//as month here starts from 0 if we do +1 it will be displayed same as that of the month
console.log(mydate.getDay())

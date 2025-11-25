const greetings="Hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}
//Maps
const map=new Map()
map.set('In','India')
map.set('USA','united')
//console.log(map) geenral print 
for(const [key,value] of map){
    console.log(key, ':', value)//used for printing seprate 
}
const myObject={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby'
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}
const progrmming=["js","rb","ppy"]
progrmming.forEach( function (val) {
    console.log(val)
})

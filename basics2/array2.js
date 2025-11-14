const dc=["lav","oood","kkkk"]
const ll=["ggg","eee","hhh"]
//console.log(dc.push(ll))//returns length of new arr
console.log(dc)
const all=dc.concat(ll)
console.log(all)
//concat  to combine
//const all_new=[...dc,...ll] directly add arrays without using concat push based on how many elements there in that array that many dots
const an=[1,2,3,[4,5,5],[6,6],[5,3,2]]
const a=an.flat(Infinity)//used to print cleaarly one array below another array
console.log(an)
console.log(Array.isArray("Lavanya"))//to chechk its array or not
console.log(Array.from("Lavanya"))//to convert into an array
let s=100
let ab=300
let c=400
console.log(Array.of(s,ab,c))
//returns a new arr


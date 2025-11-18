let a=30000
if(true){
    let a =10
    const b=200
    console.log("Inner: ",a)
}
console.log(a)
function one(){//nested functions
    //const username:"Laaavss"
    function two(){
     //   const webbbb:"Google"
        console.log(username)
        
    }
   // console.log(webbbb) here this will return false if we execute this coz it is out of the scope of that function it should basically be inside the function two

    two()
}
one()
if(true){
    const username="lavas"
    if(username==="lavas"){
        const webbbb="ggoogle"
    }
 
 
}
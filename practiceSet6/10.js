// 10. Write a function that takes an object as input and returns the value of a specific property.
let obj = {
    name : "sibasish",
    age  : 20 ,
}

function returnSpecific(){
 for( part in obj){
    if(part === "name"){
        console.log(part,obj[part]);
        
    }
 }
}
returnSpecific();
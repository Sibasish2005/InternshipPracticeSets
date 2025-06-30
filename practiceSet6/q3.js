// 3. Create an object with properties name and age, and log the name property to the console.
 let obj = {
    name : "sibasish",
    age  : 20,
    isStudent : true
 }
 for(part in obj ){
    if(part == "name"){
        console.log(part,":",obj[part]);
        
    }
 }
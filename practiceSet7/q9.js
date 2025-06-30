// 9. Write a function that takes an object as input and returns a specific property value.
let obj = {
    name : "sibasish",
    age :20,
    course :"BCA"

}
for( parts in obj ){
    if ( parts == "age"){
        console.log(parts);
        
    }
}
// 3. Can you write an example of using a callback function with an object as an argument?
function objCallback(obj,callback){
setTimeout(() => {
   callback(obj);
}, 1000);
}
function printCallback(obj){
     console.log("the object is :",obj);
}
objCallback({
    name:"Sibasish",
    age:20,
    role:"developer"
},printCallback);

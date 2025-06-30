// 3. Can you write an example of using a callback function with an object as an argument and a conditional statement?
function doSomething(obj,nextFunc){
    if(doSomething){
setTimeout(() => {
    console.log("the obj is ",obj);
    
}, 1000);
    }
    if(nextFunc){
        nextFunc();
    }

}
doSomething({name:"sibasish",age:20},nextFunc=()=>{
    doSomething({id:10,batch:20})
})
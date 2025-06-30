// 6. How does a callback function work with a recursive function?
 function fetchData(id,callback){
    callback(id);
 }
 function getData(id){
    setTimeout(() => {
        console.log("number is ",id);
        
    }, 1000);
 }
 fetchData(1,getData)
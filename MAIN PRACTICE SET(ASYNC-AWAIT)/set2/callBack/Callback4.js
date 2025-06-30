// 4. How does a callback function handle errors in a nested callback with a custom error handling mechanism?

function getData(data,nextId){
setTimeout(() => {
    console.log("data Fetched",data);
}, 1000);
if(nextId){
    nextId();
}
}

try{
    getData(2,nextId=()=>{
        getData(3);
    })
}
catch(error){
    console.log("error");
    
}

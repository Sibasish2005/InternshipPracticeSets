// 7. Can you write an example of using setTimeout with a callback function?
function getData(id,callback){
    callback(id);
}
function fetchData(id){
    setTimeout(() => {
        console.log("data fetched",id);
        
    }, 1000);
}
getData(1,fetchData)
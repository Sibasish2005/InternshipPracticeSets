// 8. How does a callback function handle multiple callbacks with different priorities and deadlines?
function getData(data,nextData){
    setTimeout(() => {
        console.log(data);
        
    }, 1000);
    setTimeout(() => {
        console.log(data);
        
    }, 2000);
    setTimeout(() => {
        console.log(data);
        
    }, 3000);
    setTimeout(() => {
        console.log(data);
        
    }, 4000);
    if(nextData){
        nextData();
    }
}
getData(2,nextData = ()=>{
    getData(3);
})
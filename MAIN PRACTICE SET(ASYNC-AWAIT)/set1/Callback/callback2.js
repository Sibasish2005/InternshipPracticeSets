// 2. How does a callback function handle multiple arguments?
function getData(dataId,nextData){
    setTimeout(() => {
        console.log("data",dataId);
    }, 1000);
    if(nextData){
        nextData();
    }

}
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    })
})
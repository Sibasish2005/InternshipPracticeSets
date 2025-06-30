// 7. Can you write an example of using a callback function with a timeout?
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
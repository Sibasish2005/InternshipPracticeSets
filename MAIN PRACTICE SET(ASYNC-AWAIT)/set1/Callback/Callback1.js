// 1. Can you explain the concept of callback hell and how to avoid it?
// Callbackhell:=>
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
//solution to callbackhell:=> Async Await
async function fetchData(dataId) {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("success");
      console.log("data recieved  with id ",dataId);
    } else {
      reject("failed");
    }
  });
}
async function getData2(id) {
  try{
    const result= await fetchData(id);
    console.log("process is ", result);
  } catch (error) {
    console.log("process has",error);
  }
}
console.log(getData2(5));

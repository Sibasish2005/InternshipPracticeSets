// 1. How does async/await handle concurrent execution of multiple asynchronous operations?
function delay(ms){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("");
    },ms)
 })
}

async function waitForResponce(ms) {
    let delays =  [delay(2000), delay(2000), delay(2000), delay(2000)];
    await Promise.all(delays);
    console.log("done");   
}
waitForResponce()

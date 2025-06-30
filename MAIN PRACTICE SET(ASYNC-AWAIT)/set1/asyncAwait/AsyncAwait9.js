// 9. How does async/await handle multiple asynchronous operations with different priorities?
function getData() {
    return new Promise((resolve)=>{
          setTimeout(() => {
    console.log("data retrived");
    resolve()
  }, 2000);
  
    })
}
async function dataExecution() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

}
dataExecution()
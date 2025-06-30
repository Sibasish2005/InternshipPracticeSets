// 1. Can you explain the concept of callback hell and how to avoid it using a callback queue?
function importData(data, nextData) {
  setTimeout(() => {
    console.log("data is ", data);
  }, 2000);
  if(nextData){
    nextData();
  }
}

importData(1,nextData=()=>{
  importData(2);
})
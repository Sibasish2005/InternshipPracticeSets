// 6. Can you write an example of using async/await with a conditional statement?

let fetchDataNode = function fetchData() {
  return new Promise((resolve, reject) => {
   if(true){
    resolve("success");
    console.log("data fetch ",resolve);
    
   }
   else{
    reject("failed");
    console.log("failure");
   }
  });
};
async function getData(){
  try{
    const user = await fetchDataNode;
  }
  catch(error){
     console.log("data fetching:", error);
    
  }
}
console.log(fetchDataNode());

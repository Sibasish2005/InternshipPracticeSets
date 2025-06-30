// 1. How does async/await handle concurrent execution of multiple asynchronous operations with shared resources?
 function getResource(resource){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{;
       resolve(resource);
    },1000)
 })
}

async function waitForResponce(resources) {
     let multipleResources = [getResource(10),getResource(20),getResource(50)]
     let data = await Promise.all(multipleResources);
     console.log(data);
     console.log("done");    
}
waitForResponce()
// 5. How does async/await handle errors in nested promises?
 async function fetchData(dataID,maxID) {
    return new Promise((resolve, reject) => {
        if(dataID<maxID){
            resolve("success");
            dataID = maxID ;
        }
        else{
            reject("error")
        }
    })
 }
 async function executionData() {
    try {
        const result = await fetchData(1,5)
        console.log(result);
        
    } catch (error) {
        console.log("the data is invalid and causing an :",error);
        
    }
 }
executionData();

    
// 3. How does async/await work with recursive functions?
async function getData(id) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      console.log("data fetched");
      resolve(id);
    }, 1000);
  });
}
async function recursiveFetchData(id,max) {
      if (id > max) return;

  const data = await getData(id);
  console.log("Data is:", data);

  await recursiveFetchData(id + 1, max);
}
recursiveFetchData(1,3);
// 3. How does async/await work with recursive functions and memoization?
const cache = {};
async function fetchApi(data) {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    } else {
      reject("error");
    }
  });
}

 async function asyncMemoize(data) {
  if (cache[data]) {
    console.log("from cache" + data);
    return cache[data];
  } else {
    const getData = fetchApi(data);
    cache[data] = getData;
    return getData;
  }
}
async () => {
  console.log(await asyncMemoize(2));
  console.log(await asyncMemoize(4));
  console.log(await asyncMemoize(3));
};

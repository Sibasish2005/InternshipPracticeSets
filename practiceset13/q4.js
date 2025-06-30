// 4. What is the purpose of the async/await syntax in JavaScript?
function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      console.log("Resolved:", data);
    }, 1000);
  });
}

async function fetchData(data) {
  await getData(data);
  await getData(data);
  await getData(data);
  await getData(data);
}

fetchData(2);

// 8. How do you handle errors in an async function?
function getData(data) {
  return new Promise((resolve, reject) => {
    console.log(data);
    resolve("success");
  });
}

async function fetchData(data) {
  try {
    await getData("data is "+data);
  } catch (e) {
    console.log("error");
  }
}

fetchData(2);

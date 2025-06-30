// 10.difference between callback hell , promise chain and async await with example...which prefer most and why?

// callBack hell ==>
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 3000);
// }

// getData(1, () => {
//   console.log("getting data ");
//  getData(2,()=>{
//     console.log("getting data ");
//     getData(3,()=>{
//         console.log("all data fetched");

//     })
//  })
// });

// 10.difference between callback hell , promise chain and async await with example...which prefer most and why?
//promiseChain ==>

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1)
//   .then((res) => {
//     console.log();
//     return getData(2);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 10.difference between callback hell , promise chain and async await with example...which prefer most and why?

// async await ==>

function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
    console.log("data fetched", dataId);
  }, 2000);
}
async function fetchData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
}
fetchData();
// as we can see that using async await reading the code is very much easy ,so we prefer async await .
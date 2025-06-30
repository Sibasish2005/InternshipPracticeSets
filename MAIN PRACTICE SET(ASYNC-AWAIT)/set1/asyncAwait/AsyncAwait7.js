// 7. How does async/await work with the await keyword inside a loop?
async function initiateArray() {
  let arr = [1, 2, 3, 4, 5];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 1000);
  });
}
async function getArrayElement() {
  const arrElement = await initiateArray;
  for (let i = 0; i < arrElement.length; i++) {
    const element = arrElement[i];
    console.log(element);
  }
}
console.log(getArrayElement());

//
function delayLog(um) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("numbers :", num);
      resolve();
    }, 1000);
  });
}

async function processNumbers() {
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    await delayLog(numbers[i]); 
  }
}

processNumbers();
const maxSubArraySum = (arr) => {
  if (arr.length === 0) {
    console.log("the array is empty");
  }

  let maxCurrent = arr[0];

  let maximum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxCurrent + arr[i] > arr[i]) {
      maxCurrent = maxCurrent + arr[i];
    } else {
      maxCurrent = arr[i];
    }
  }

  if (maxCurrent > maximum) {
    maximum = maxCurrent;
  }
  console.log(maxCurrent);
  
};

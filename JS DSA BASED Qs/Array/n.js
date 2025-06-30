// 2. Write a function to find the minimum window that contains all elements of a given array.
function containsAll(window, target) {
  for (let i = 0; i < target.length; i++) {
      let found = false;
      for (let j = 0; j < window.length; j++) {
          if (target[i] === window[j]) {
              found = true;
              break;
          }
      }
      if (!found) return false;
  }
  return true;
}

function minWindowSimple(arr, target) {
  let minLength = arr.length + 1;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
          let window = [];
          for (let k = i; k <= j; k++) {
              window.push(arr[k]);
          }

          if (containsAll(window, target)) {
              if (window.length < minLength) {
                  minLength = window.length;
                  result = window;
              }
          }
      }
  }

  return result;
}


let arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11], 12, [13, 14, 15]];
let newArr = [];

function flattenArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenArray(array[i]); // ✅ Recursively flatten sub-arrays
        } else {
            newArr.push(array[i]); // ✅ Add non-array elements to newArr
        }
    }
}

flattenArray(arr);
console.log(newArr);

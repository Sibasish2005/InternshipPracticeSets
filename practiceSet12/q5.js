// 5. Question:Create a JavaScript Array of object with some key values after that print the objects and then add another key value all of the objects and print the objects with new key value again

let objArr = [
  { name: "aman" },
  { name: "shobhit" },
  { name: "saran" }
];

console.log("Original objects:", objArr);

objArr.forEach(obj => {
  obj.age = 25;
});

console.log("Updated objects:", objArr);

let arr = [
  {
    name: "Sibasish",
    age: 20,
  },
  {
    name: "Sibasish",
    age: 20,
  },
  {
    name: "Sibasish",
    age: 20,
  },
];

arr.forEach((item) => {
  for (let key in item) {
    console.log(key, item[key]);
  }
});

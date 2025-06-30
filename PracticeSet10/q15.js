// 15.Update the age property of the object {name: 'John', age: 25} to 30 without mutating the original object.
 let obj = {name: 'John', age: 25};
 let updatedObj = { ...obj,age:30};
 console.log(updatedObj);
 console.log(obj);
 
 
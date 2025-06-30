// 9.Given an array of objects [{name: 'John', age: 25}, {name: 'Jane', age: 30}], extract all names.


const people = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];

const names = people.map(person => person.name);

console.log(names);

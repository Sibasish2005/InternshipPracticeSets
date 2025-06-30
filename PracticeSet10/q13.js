// 13.Find the object with name equal to 'Jane' in the array [{name: 'John', age: 25}, {name: 'Jane', age: 30}]

let  people = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
let jane = null;

for (let i = 0; i < people.length; i++) {
  if (people[i].name === 'Jane') {
    jane = people[i];
    break;
  }
}

console.log(jane);

// 4. Can you explain the concept of async/await with async generators?

function* gen() {
  console.log("Start");
  yield 1;          // Pauses here first
  console.log("Between yields");
  yield 2;          // Pauses here second
  console.log("End");
  yield 3;          // Pauses here third
}

const g = gen();

g.next(); g.next(); // Logs "Between yields", returns { value: 2, done: false }
g.next(); // Logs "End", returns { value: 3, done: false }
g.next();























// 2. Can you write an example of using async/await with a custom iterable?

//iterator
// const c = {
//     [Symbol.iterator](){
//         let val = 1
//         return{
//             next(){
//                 return {
//                     val,
//                     done:val++ >3
//                 }
//             }
//         }
//     }
// }

//async-iterator:-

const d = {
  [Symbol.asyncIterator]() {
    let value = 1;
    return {
      next() {
        return new Promise((resolve) => {
          const result = {
            value,
            done: value++ > 4,
          };
          setTimeout(() => {
            resolve(result);
          }, 1000);
        });
      },
    };
  },
};

async function print() {
  for await (let item of d) {
    console.log(item);
  }
}
print();
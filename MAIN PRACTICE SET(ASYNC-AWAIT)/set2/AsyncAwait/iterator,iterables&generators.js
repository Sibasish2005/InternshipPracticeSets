// iterators
const iter = {
   counter:0,
    next(){
        return{
            value:this.counter++,
            done:false,
        }
    }
}
let next = iter.next();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);


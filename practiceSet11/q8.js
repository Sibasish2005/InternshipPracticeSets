// 8. Can you explain how to use filter() in combination with other array methods, such as map() or reduce(), to perform complex data transformations?
let arr = [1,2,3,4,5,6];
let newArr1 = arr.filter((val)=>{
if(val%2==0){
return val;
};
})
console.log(newArr1);
let newArr2 = arr.map((val)=>{
   return val*2;
});
console.log(newArr2);
let newArr3 = arr.reduce((a,c)=>{
return a+c;
})
console.log(newArr3);


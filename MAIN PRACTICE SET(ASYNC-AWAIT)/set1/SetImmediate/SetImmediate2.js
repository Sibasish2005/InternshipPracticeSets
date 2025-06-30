// 2. How does setImmediate work with a recursive function?

function getData(id,max){
    if (id > max) return;
setImmediate(() => {
    console.log();
    console.log("data is :",id);
}, 1000);
getData(id + 1,max);
}
getData(1,2)
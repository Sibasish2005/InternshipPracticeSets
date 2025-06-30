// 3. Can you write an example of using setImmediate with a conditional statement?

setImmediate(() => {
    let num = 10;
    if(num<=20)
    console.log(num+" is under 20");
});
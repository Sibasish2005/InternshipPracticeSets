// 4. How do you use filter() to remove null or undefined values from an array?
 let mixedValues = [ 1,2,3,4,5,null,,];
 let newArray = mixedValues.filter(function returnNums(num){
    if(NaN){
        return;
    }
    return num;
 })
 console.log(newArray);
 
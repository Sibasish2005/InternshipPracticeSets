// 2.  Write a JavaScript function to find the maximum number in an array of numbers.
let arr = [1,2,3,6,4,5,9,6,8,4];
 function findMaxNum(){
    let max = 0;
    let curMax = 0;
    for(let i=0;i<arr.length;i++){
        curMax=arr[i];
        if(curMax>max){
            max=curMax
        }
    }
    return max;
 }
 console.log(findMaxNum(arr));
 
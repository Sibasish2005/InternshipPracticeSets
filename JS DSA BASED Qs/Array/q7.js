// 7. Write a function to find the maximum product of a subarray within an array.
arr=[1,2,3,4,5,6,7,-1];
function maxProductSubArr(arr){
    let maxProduct=arr[0];
    let minProduct=arr[0];
    let result=arr[0];
    let current=arr[0];
    for(let i=0;i<arr.length;i++){
        current=arr[i];
        if(current<0){
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }
        if(current>maxProduct*current){
            maxProduct=current;
        }
        else{
            maxProduct=maxProduct*current;
        }
        if(current<minProduct*current){
            minproduct=current;
        }
        if(maxProduct>result){
            result=maxProduct;
        }
    }
    
    return result;
}
console.log(maxProductSubArr(arr));

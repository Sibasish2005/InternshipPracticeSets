
// 7.  Write a JavaScript function to find duplicate elements in an array.

let arr = [1,1,2,3,4,4,5,6,7,1];

function findDuplicate(){
    let unique=[];
    let duplicate=[];
    
    for( let i=0;i<arr.length;i++){
        
    if(!unique.includes(arr[i])){
     unique.push(arr[i])
    } 
    else{
        duplicate.push(arr[i])
    }
         
    }
    console.log(duplicate);
}
findDuplicate(arr);


// 3.  Write a JavaScript function to check if a given number is prime or not.

function isPrime(num){
    let flag = 0;
    for( let i =2;i<num;i++){
        if( num % i == 0){
            flag++;
        }
    }
    if(flag !=0){
        return false;
    }
    else{
        return true;
    }
}
let n = 14;
if( isPrime(n)){
    console.log("prime");
    
}
else{
    console.log("not");
    
}
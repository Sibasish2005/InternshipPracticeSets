// 4. Write a function to compress a string using run-length encoding.

let str="wwwwwAAAAAddbbccc"
function runCompress(str){
    if(str.length<1){
        console.log("empty string");
    }
    let encodedStr="";
    let count=1;
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }
        else{
            encodedStr+= str[i]+count;
            count=1;
        }
      
        
    }
    console.log(encodedStr);
    
}
runCompress(str);
// 7. Can you write an example of using a callback function with a timeout and a conditional statement?
function  compare(num,max,nextNum){
   if(max>num){
    setTimeout(() => {
      console.log("number is smaller than max");
    num = max ;  
    console.log("Updated Number",num);
    
    }, 1000);
   }
   else{
    console.log("number is Greater than max",num);
    
   }
   if(nextNum){
    nextNum();
   }
}
compare(2,3,nextNum = ()=>{
    compare(4,4);
})
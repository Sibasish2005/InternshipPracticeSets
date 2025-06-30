// 8. explainhigher order function with one example 
 function greet(){
    console.log("hello");
    
 }
 function sayHello(callBack){
  callBack();
 }
 sayHello(greet);
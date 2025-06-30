// 5.block scope and global scope , and hoisting
//==> BLOCK SCOPE: block scope is block specific,example:

{
    let num = 5;
    console.log(num);
    
}

// ==> GLOBAL SCOPE: the global scope can be used to entire js code .

let value = 10;
  function sqr(){
    console.log(value**2);
    
  }
  sqr(); 
 

  // hoeisting in js
 greet();
  function greet(){
    console.log("hello");
    
  }

// 7. Write a function to validate a string as a valid email address using a regular expression.

function isValidEmain(email){
    let validEmail=/^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if(email.match(validEmail)){
       console.log(email,"is a valid email address.");
       
   }}
   isValidEmain("Sibasish@gmail.com")
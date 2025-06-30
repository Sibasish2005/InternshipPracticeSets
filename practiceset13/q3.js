// 3. Write a JavaScript program to check if a given string is a valid JSON string.
function checkJSON(str){
     try {
    JSON.parse(str); 
    return true;
         
  } catch (e) {
    return false;    
  }
}
console.log(checkJSON('{"name": "sibasish", "age": 20}'));

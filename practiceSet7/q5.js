// 5. Write a function that takes a string as input and returns the string with all spaces removed.
let str = " S  I  B  A  S  I  S  H"

console.log(str);
function removeSpace() {
    let newStr = str;
    while (newStr.includes(" ")) {
        newStr = newStr.replace(" ", "");
    }
    console.log(newStr);
}

removeSpace();

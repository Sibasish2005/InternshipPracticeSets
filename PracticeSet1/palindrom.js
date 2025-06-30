// 8. How would you check if a string is a palindrome, ignoring spaces, punctuation, and case sensitivity?

let str = "aabaa";

function checkPalindrome() {
  const reverseStr = () => {
    let parts = str.split("");
    let reversed = "";

    for (let i = parts.length - 1; i >= 0; i--) {
      reversed += parts[i];
    }
    return reversed;
  };
  const reversed=reverseStr()

  if (str === reversed) {
    console.log("then", str, "is a pallindrom");
  }
}

checkPalindrome(str);

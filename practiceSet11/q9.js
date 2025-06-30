// 9. What is the difference between innerHTML and textContent properties in the DOM, and when would you use each?
const innerHTMLs = document.getElementsByClassName("class1");
const textContents = document.getElementsByClassName("class2");
for (let el of innerHTMLs) {
  console.log("innerHTML:", el.innerHTML);
}
for (let el of textContents) {
  console.log("textContent:", el.textContent);
}


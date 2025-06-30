// 5. Write a function to decompress a string compressed with run-length encoding.
let compressedStr = "w5A5d2b2c3";
function runDecompress() {
  let decompressedStr = "";
  let i = 0;

  while (i < compressedStr.length) {
    let char = compressedStr[i];
    i++;

    let count = "";
    while (i < compressedStr.length && !isNaN(compressedStr[i])) {
      count = count + compressedStr[i];
      i++;
    }
    decompressedStr = decompressedStr + char.repeat(Number(count));
  }
  console.log(decompressedStr);
}
runDecompress();

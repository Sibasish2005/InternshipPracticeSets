// 2. How does setTimeout work with a recursive function?
function resursiveFetch(id, max) {
  if (id > max) return;
  
  setTimeout(() => {
    console.log("Data is:", id);
  }, 1000);
  resursiveFetch(id + 1, max);
}
resursiveFetch(1, 3);

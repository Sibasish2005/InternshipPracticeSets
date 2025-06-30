const fs = require('fs');
const path = require('path');

const directory = './JAVASCRIPT'; // Your extracted folder path
const output = fs.createWriteStream('JavaScript_Interview_Summary.md');

function readFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFiles(fullPath);
    } else if (file.endsWith('.js')) {
      output.write(`## 📂 ${path.basename(path.dirname(fullPath))}\n`);
      output.write(`### 🔹 ${file}\n`);
      const content = fs.readFileSync(fullPath, 'utf-8');
      output.write("```js\n" + content + "\n```\n\n");
    }
  });
}

readFiles(directory);
console.log("✅ Combined file saved as JavaScript_Interview_Summary.md");

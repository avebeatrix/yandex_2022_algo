/* B. Канонический путь */
let getResult = (path) => {
	let chunks = path.split('/');
    let stack = [];
    chunks.forEach(chunk => {
        if (chunk === '.' || chunk === '') {
            return;
        }
        if (chunk === '..') {
            stack.pop();
            return;
        }
        stack.push(chunk);
    });

    return '/' + stack.join('/');
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim();

const result = getResult(data);

fs.writeFileSync("output.txt", result);
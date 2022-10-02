/* B. Повторяющееся число */
let getResult = (data) => {	
    const [n, k] = data[0].split(' ').map(val => parseInt(val));
    const digits = data[1].split(' ').map(val => parseInt(val));
    const set = new Set();
    return digits.some((digit, i) => {
        if (set.has(digit)) {
            return true;
        }
        set.add(digit);
        set.delete(digits[i - k]);
    }) ? 'YES' : 'NO';
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
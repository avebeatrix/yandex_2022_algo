/* D. Majority */
let getResult = (data) => {	
    const n = parseInt(data[0]);
    const nums = data[1].split(' ').map(num => parseInt(num));
    const map = new Map();
    let result = -1;
    nums.forEach(num => {
        map.set(num, (map.get(num) ?? 0) + 1);
        if (map.get(num) > n / 2) result = num;
    })
    return result.toString();
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
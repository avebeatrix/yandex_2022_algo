/* C. Замена слов */
let getResult = (data) => {	
    const short = new Set(data[0].trim().split(' '));
    const long = data[1].split(' ');
   
    return long.map((word) => {
        const index = word.split('').findIndex((char, i) => {
            const part = word.slice(0, i + 1);
            return short.has(part);         
        });
        if (index === -1) {
            return word;
        }
        return word.slice(0, index + 1);
    }).join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
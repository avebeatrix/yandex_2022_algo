/* E. Сломай палиндром */
const getResult = (data) => {	
    const s = data[0].trim();
    const n = s.length;
    if (n <= 1) return '';
    let replaceChar = 'a';

    let middle = Math.floor(n / 2) ;
    if (n % 2) {
        middle--;
    }
       
    for (let i = 0; i <= middle; i++) {
        if (s[i] !== 'a') {
            return s.slice(0, i) + replaceChar + s.slice(i + 1);           
        }
    }   
    return s.slice(0, n - 1) + 'b';
}

const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
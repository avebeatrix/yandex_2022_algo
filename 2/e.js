/* E. Отбраковка */
let getResult = (data) => {	
   
    const set = new Set(data[1].trim().split(' '));    
    const map2 = new Map();
    const map3 = new Map();
    [...set].map(word => {
        const wordInLowerCase = word.toLowerCase();
        if (!map2.has(wordInLowerCase)) {
            map2.set(wordInLowerCase, []);
        }
        map2.get(wordInLowerCase).push(word);

        const wordInReplace = wordInLowerCase.replace(/[aeiou]/g, '_');
        if (!map3.has(wordInReplace)) {
            map3.set(wordInReplace, []);
        }
        map3.get(wordInReplace).push(word);
    })
   
    return data[3].split(' ').map(word => {
        if (set.has(word)) {
            return word;
        }
        const wordInLowerCase = word.toLowerCase();
        if (map2.has(wordInLowerCase)) {
            return map2.get(wordInLowerCase)[0];
        }
        const wordInReplace = wordInLowerCase.replace(/[aeiou]/g, '_');
        if (map3.has(wordInReplace)) {
            return map3.get(wordInReplace)[0];
        }
    }).join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
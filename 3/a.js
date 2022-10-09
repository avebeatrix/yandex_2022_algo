/* A. Анаграмма? */
let getResult = (data) => {	
    const map1 = new Map();
    data[0].trim().split('').forEach(char => {       
        map1.set(char, (map1.get(char) || 0) + 1);
    });
    const map2 = new Map();
    data[1].trim().split('').forEach(char => {       
        map2.set(char, (map2.get(char) || 0) + 1);
    })
    if (map1.size != map2.size) {
        return 'NO';
    }
    for(let [char, count] of map1.entries()) {
        if (!map2.has(char) || map2.get(char) !== count) {
            return 'NO';
        }
    }
	
	return 'YES';
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
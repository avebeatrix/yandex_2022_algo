/* A. Два из трех */
let getResult = (data) => {	
    const set1 = new Set(data[1].split(' ').map(val => parseInt(val)));
    const set2 = new Set(data[3].split(' ').map(val => parseInt(val)));
    const set3 = new Set(data[5].split(' ').map(val => parseInt(val)));

    const setUnion = new Set([...set1, ...set2, ...set3]);   

    const result = [...setUnion].filter(val => set1.has(val) && set2.has(val) || 
        set2.has(val) && set3.has(val) || 
        set1.has(val) && set3.has(val)).sort((a, b) => a - b);
	
	return result.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
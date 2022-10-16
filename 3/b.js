/* B. Бумеры и зумеры */
let getResult = (data) => {	
    const ages = data[1].trim().split(' ').map(age => parseInt(age));
    ages.sort((a, b) => a - b);

    if (ages.length < 2) {
        return '0';
    }   

    let result = 0;
   
    let left = 0;
    let right = 0;

    const n = ages.length;

    ages.forEach(age => {
        while (left < n && ages[left] <= 0.5 * age + 7) {
            left++;
        }
        while (right < n && ages[right] <= age) {
            right++;
        }
        if (right > left + 1) {
            result += right - left - 1;
        }
    }); 
	
	return result.toString();
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
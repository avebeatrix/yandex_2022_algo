/* D. Разница во времени */
const getResult = (data) => {	
    const n = parseInt(data[0].trim());
    const arrival = [];
    data[1].trim().split(' ').forEach(arrive => {
        let [hours, minutes] = arrive.split(':').map(val => parseInt(val));
        arrival.push(hours * 60 + minutes);
        arrival.push(hours * 60 + minutes + 24 * 60);        
    });
    arrival.sort((a, b) => a - b);
    let result = 24 * 60;
    for (let i = 1; i < 2 * n; i++) {
        result = Math.min(result, arrival[i] - arrival[i - 1]);
    }
    return result.toString();
}

const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
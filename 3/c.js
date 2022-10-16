/* C. Количество положительных на отрезке */
let getResult = (data) => {	
    const n = parseInt(data[0].trim());
    const range = data[1].trim().split(' ').map(num => parseInt(num));
    const m = parseInt(data[2].trim());
    const queries = [];

    for (let i = 0; i < m; i++) {
        queries.push(data[3 + i].trim().split(' ').map(num => parseInt(num)));
    }

    const result = [];

    const prefix = [0];
    let positiveCount = 0;
    range.forEach(num => {
        positiveCount += num > 0 ? 1 : 0;
        prefix.push(positiveCount);
    })

    queries.forEach(q => {
        let [left, right] = q;
        if (left === right && range[left - 1] > 0 ) {
            result.push(1);
        } else {
            result.push(prefix[right] - prefix[left - 1]);
        }       
    })

    return result.join('\n');
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
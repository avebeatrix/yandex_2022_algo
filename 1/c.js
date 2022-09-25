/* C. Купить и продать */
const getResult = (data) => {	
    const n = parseInt(data[0].trim());
    const costs = data[1].trim().split(' ').map(num => parseInt(num.trim()));
    const myAmount = 1000;
    let a = 1;
    let tmpA = 1;
    let b = 1;
    
    let buyAmount = Math.floor(myAmount / (costs[0] / 1000));
    let maxProfit = 0;

    for (let i = 1; i < n; i++) {
        let curProfit = buyAmount * (costs[i] / 1000) - buyAmount * (costs[tmpA - 1] / 1000);
        if (costs[i] > costs[tmpA - 1] && curProfit > maxProfit) {
            a = tmpA;
            b = i + 1;
            maxProfit = curProfit;
        } else if (costs[i] < costs[tmpA - 1]) {
            tmpA = i + 1;
            buyAmount = Math.floor(myAmount / (costs[i] / 1000));    
        }
    }
    if (a === b) {
        return '0 0';
    }

    return `${a} ${b}`;
}

const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result);
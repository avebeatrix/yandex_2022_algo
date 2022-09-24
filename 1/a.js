/* A. Строительство лесенок */
let getResult = (data) => {
	let n = parseInt(data);

	let count = 0;
	let i = 0;
	while (n >= i + 1) {
		i++;
		n -= i;
		count++;
	}

	return count.toString();
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim();

const result = getResult(data);

fs.writeFileSync("output.txt", result);
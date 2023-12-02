const fs = require('fs');

console.log("Test");

const isNumber = (char) => {
    return !isNaN(char) && !isNaN(parseFloat(char));
}

const findFirstNumber = (word) => {
    for (const character of word.split('')) {
        if (isNumber(character)) {
            return character;
        }
    }
    return '0';
}

const findSecondNumber = (word) => {
    for (const character of word.split('').reverse()) {
        if (isNumber(character)) {
            return character;
        }
    }
    return '0';
}

fs.readFile("input.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
    const wordList = data.toString().split('\n');

    let total = 0;
    for (const item of wordList) {
        const firstNumber = findFirstNumber(item);
        const secondNumber = findSecondNumber(item);

        const sum = firstNumber + secondNumber;
        console.log(firstNumber, secondNumber, sum);
        console.log(item);
        total += Number(sum);
    }

    console.log("Total is " + total);

});
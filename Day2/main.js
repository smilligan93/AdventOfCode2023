const fs = require('fs');

const isNumber = (char) => {
    return !isNaN(char) && !isNaN(parseFloat(char));
}

const numberList = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
];

const findSumOfLine = (word) => {
    let first = '';
    let second = '';
    let index = 0;
    for (const character of word.split('')) {
        index++;
        if (isNumber(character)) {
            if (first === '') {
                first = character;
            }
            second = character;
        } else {
            // check all words that could be
            for (let i = 0; i < index; i++) {
                // console.log("Substring " + word.substring(i, index));
                const numberListIndex = numberList.indexOf(word.substring(i, index));
                if (numberListIndex >= 0) {
                    const numberAsString = `${numberListIndex + 1}`; // the related number is just its index + 1
                    console.log("Was a number " + numberAsString);
                    if (first === '') {
                        first = numberAsString;
                    }
                    second = numberAsString;
                }
            }
        }
    }
    return Number(first + second);
}

fs.readFile("input.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
    const wordList = data.toString().split('\n');

    let total = 0;
    for (const item of wordList) {

        const sum = findSumOfLine(item);
        console.log(sum);
        console.log(item);
        total += sum;
    }

    console.log("Total is " + total);

});

// 1
function doubleLetter(str) {
    let doubleLetterStr = '';
    for (let i = 0; i < str.length; i++) {
        doubleLetterStr = doubleLetterStr.concat(str[i].repeat(2));
    }
    return doubleLetterStr;
}

console.log(doubleLetter('hello'));


// 2
function padString(str, length, symbol, toLeft) {
    let newStr = '';
    return toLeft
        ? newStr = str.padStart(length, symbol)
        : newStr = str.padEnd(length, symbol)
}

console.log(padString('Ivan', 10, '*', false));
console.log(padString('Ivan', 10, '*', true))



// 3
function camelCase(str, separator) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr = newStr.concat(str[i].toLowerCase(), separator);
        } else {
            i % 2 === 0
                ? newStr = newStr.concat(str[i].toLowerCase(), separator)
                : newStr = newStr.concat(str[i].toUpperCase(), separator)
        }
    }
    console.log(newStr)
    return newStr;
}

camelCase('hello', '*');
camelCase('hello', '');

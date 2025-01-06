//1
// Просте число — це натуральне число, яке має рівно два різні натуральні дільники (лише 1 і саме число).
// Решту чисел, окрім одиниці та нуля, називають складеними.
// Натуральні числа - це числа, які використовують при лічбі.

const getData = prompt('Введіть натуральне число:');
const getNumber = +getData;
const isBiggerThan1 = getNumber > 1;

if (isNaN(getNumber) || !isBiggerThan1) {
    console.log('Виникла помилка обчислення');
} else  {
    let counter = 0;
    for (let i = 1; i <= getNumber; i++) {
        if (getNumber % i === 0) {
            counter += 1;
        }
    }
    counter === 2 ? console.log(`Число ${getNumber} просте`) : console.log(`Число ${getNumber} складене`);
}

// 2
// досконале число  — натуральне число, що дорівнює сумі його додатних дільників, не враховуючи самого числа.
// Наприклад, 6 має дільники 1, 2, 3 (не враховуючи його самого),
// 6 = 1 + 2 + 3, тому 6 — досконале число.

const getData = prompt('Введіть число більше за 1:');
const getNumber = +getData;
const isBiggerthan1 = getNumber > 1;

if (isNaN(getNumber) || !isBiggerthan1) {
    console.log('Виникла помилка обчислення');
} else if (isBiggerthan1 && getNumber < 6)  {
    console.log(`В діапазоні від 1 до ${getNumber} немає досконалих чисел`);
} else {
    let counter = 0;
    let perfectNumberCounter = 0;
    for (let i = 6; i <= getNumber; i++) {

        //check if number is perfect
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                counter += j;
            }
        }

        //find perfect number and add +1 to counter
        if (counter === i) {
            console.log('counter === 1', counter, i);
            perfectNumberCounter +=1;
        }
        counter = 0;
    }
    perfectNumberCounter
        ? console.log(`В діапазоні від 1 до ${getNumber} є ${perfectNumberCounter} досконалих чисел`)
        : console.log(`В діапазоні від 1 до ${getNumber} немає досконалих чисел`);
}


//3
const getData = prompt('Введіть число більше або дорівнює 4:');
const getNumber = +getData;
const isMinimalNumber = getNumber >= 4; //for minimal piramide

if (isNaN(getNumber) || isMinimalNumber) {
    console.log('Pyramid can not be created');
} else {
    let starsUsed = 0;
    let i = 1;
    while (starsUsed + (2 * i - 1) <= getNumber) {
        starsUsed += 2 * i - 1;
        i++;
    }

    let rows = i - 1;
    for (let j = 1; j <= rows; j++) {
        let spaces = ' '.repeat(rows - j);
        let stars = '*'.repeat(2 * j - 1);
        console.log(spaces + stars);
    }
}











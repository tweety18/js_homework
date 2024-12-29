// 1
const getNumber = prompt('Введіть число:', 1);
const calcNumber = +getNumber;
const dividedBy3Condition = calcNumber % 3 === 0;
const dividedBy5Condition = calcNumber % 5 === 0;
const dividedBothCondition = dividedBy3Condition && dividedBy5Condition;

if (!isNaN(calcNumber)) {
    if (dividedBothCondition) {
        console.log('FizzBuzz');
    } else if (dividedBy5Condition) {
        console.log('Buzz');
    } else if (dividedBy3Condition) {
        console.log('Fizz');
    }
} else {
    console.log('Введене значення не числове');
}

// 2
const getYear = prompt('Введіть рік:', 1);
const has4characters = getYear.length === 4;

if (has4characters && !isNaN(+getYear)) {
    +getYear % 4 === 0
        ? console.log('Цей рік високосний')
        : console.log('Цей рік не високосний');
} else {
    console.log('Некоректне значення');
}


// 3
const getAge = prompt('Введіть свій вік:', 1);

if (!isNaN(+getAge)) {
    if (getAge.endsWith('1')) {
        +getAge === 11
            ? console.log('Вам ' + getAge + ' років')
            : console.log('Вам ' + getAge + ' рік')
    } else if (getAge.endsWith('2') || getAge.endsWith('3') || getAge.endsWith('4')) {
        +getAge >= 12 && +getAge <= 14
            ? console.log('Вам ' + getAge + ' років')
            : console.log('Вам ' + getAge + ' роки');
    } else {
        console.log('Вам ' + getAge + ' років');
    }
} else {
    console.log('Введене значення не числове');
}






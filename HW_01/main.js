// 1
function isPrime(number) {
    let counter = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter += 1;
        }
    }
    return counter === 2 ? true : false;
}

const numbersArr = [10, 15, 3, 7, 19, 20, 23];
const primeNumbersArr = numbersArr.filter(number => isPrime(number));
console.log(primeNumbersArr);


// 2
const notifications = [
    {
        source: 'email',
        text: 'hello',
        date: new Date(),
    },
    {
        source: 'phone',
        text: 'hello111',
        date: new Date(),
    },
    {
        source: 'chat',
        text: 'hello222',
        date: new Date(),
    },
    {
        source: 'chat',
        text: 'hello333',
        date: new Date(),
    },
    {
        source: 'phone',
        text: 'hello444',
        date: new Date(),
    },
];

const res = Object.groupBy(notifications, item => item.source);
console.log(res)

// 3
function customGroupBy(arr, groupByItem) {
    return arr.reduce((acc, curr) => {
        acc[curr[groupByItem]] ? acc[curr[groupByItem]].push(curr) : acc[curr[groupByItem]] = [curr];
        return acc;
    }, {});
}

console.log(customGroupBy(notifications, 'date'));
console.log(customGroupBy(notifications, 'source'))




// 1
function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        setTimeout(() => console.log(message[i]), Math.floor(Math.random() * 1001));
    }
}

randomDelayPrint('hello');

// 2


function intervalRace(funcArr, t) {
    let index = 0;
    let resArr = [];

    const intervalId = setInterval(() => {
        if (index < funcArr.length) {
            resArr.push(funcArr[index]());
            index++;
        } else {
            clearInterval(intervalId);
            console.log(resArr);
            return resArr;
        }
    }, t);
}

const func1 = () => {
    console.log('call func1');
    return 1;
};
const func2 = () => {
    console.log('call func2');
    return 2;
};
const func3 = () => {
    console.log('call func3');
    return 3
};
const func4 = () => {
    console.log('call func14');
    return 'abc'
};

const funcArr = [func1, func2, func3, func4];

intervalRace(funcArr, 1000);

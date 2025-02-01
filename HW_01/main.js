//1
function summarize(num) {
    return function (arg = 1) {
        return num + arg;
    }
}

const sumFunc = summarize(5);
const res = sumFunc(); //6
console.log(res);

const res2 = sumFunc(5);
console.log(res2); //10

//2
function counter(startValue, step) {
    let start = startValue;
    console.log('startValue',startValue);
    return function() {
        return {
            increment: () => start +=step,
            decrement: () => start -= step,
            reset: () => start = startValue
        }
    }
}

const newCounter = counter(5, 5);
console.log(newCounter().increment()); //10
console.log(newCounter().increment()); //15
console.log(newCounter().increment()); //20
console.log(newCounter().decrement()); //15
console.log(newCounter().increment()); //20
console.log(newCounter().reset()); //5



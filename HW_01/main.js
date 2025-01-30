//1
function decorator(fn) {
    return function (...args) {
        console.log(args);
        return fn.apply(this, args);
    }
}

function infinitArgs(...args) {
    return args;
}

const decoratedFunction = decorator(infinitArgs);
decoratedFunction(1,2,3,4);

// 2
function validate(sum, validator) {
    return function (...args) {
        if (args.find(el => el < validator)) {
            throw new Error('there is negative number in arguments')
        }
            console.log('Validation passed succesfully');
            return sum.apply(this, args);
    }
}

function sum(...args) {
    return args;
}

const validateSum = validate(sum, 0);
validateSum(1,2,3);
validateSum(1,-2,3);




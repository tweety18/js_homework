// 1
function reverseString(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('hello'));


// 2
// Больше всего пятибуквенных слов-палиндромов: заказ, довод, кабак, казак, комок, наган, потоп, ротор, топот, шабаш, шалаш.
function isPalindrome(str) {

    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr === str ? `${str} is palindrome` : ` ${str} is not palindrome`;
}

console.log(isPalindrome('test'));
console.log(isPalindrome('шалаш'));

// 3
// Найбі́льший спі́льний дільни́к (НСД) двох або більше невід'ємних чисел — найбільше натуральне число,
// на яке ці числа діляться без остачі.


function findGCD(a, b) {
    let number1Array = [];
    let number2Array = [];
    let gcd;

    if (a > 0 && b > 0) {
        // fing array of divisors for first argument
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                number1Array.push(i);
            }
        }

        // fing array of divisors for second argument
        for (let i = 1; i <= b; i++) {
            if (b % i === 0) {
                number2Array.push(i);
            }
        }

        //compare 2 arrays of divisors in nested loop
        for (let i = number2Array.length - 1; i >= 0; i--) {
            for (let k = number1Array.length - 1; k >= 0; k--) {
                if (number1Array[k] === number2Array[i]) {
                    gcd = number2Array[i];
                }
            }
            if (gcd) {
                break
            }
            ;
        }

        console.log(number1Array);
        console.log(number2Array);
        return gcd;
    } else {
        throw new Error('Please pass positive numbers');
    }

}

console.log(findGCD(24, 114));
console.log(findGCD(12, 12));
console.log(findGCD(0, 1)); //error


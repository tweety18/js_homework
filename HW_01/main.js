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
    return reverseStr === str ? `${str} is palindrome`: ` ${str} is not palindrome`;
}

console.log(isPalindrome('test'));
console.log(isPalindrome('шалаш'))


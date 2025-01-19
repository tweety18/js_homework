// 1
function capitalizeStrings(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
       newArr.push(arr[i][0].toUpperCase().concat(arr[i].slice(1).toLowerCase()));
    }
    return newArr;
};

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words));

// 2
function findCommonElements(arr1, arr2) {
    const commonElementsArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k]) {
                commonElementsArr.push(arr1[i]);
                break;
            }
        }
    }
    return commonElementsArr;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2));

// 3
function analyzeArray(arr) {
    const analyzeObj = {};
    let sum = 0;
    let min = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i === 0) {
            min = arr[i];
            max = arr[i];
        } else {
            arr[i] < min ? min = arr[i] : min;
            arr[i] > max ? max = arr[i] : max;
        }

    }
    const average = sum / arr.length;
    return { sum, average, min, max };
}


const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers));

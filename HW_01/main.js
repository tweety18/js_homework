//1
function reverseArray(arr) {
    let reverseArr = [];
    for (let i = 0; i < arr.length; i++) {
        reverseArr[i] = arr[arr.length - 1 - i];
    }
    return reverseArr;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));

//2
function uniqueValues(arr1, arr2) {
    const uniqueArray = [];
    const combinedArray = arr1.concat(arr2); // concat all arrays together

    //create new array with unique elements
    for (let i = 0; i < combinedArray.length; i++) {
        let isUnique = true;
        for (let k = 0; k < uniqueArray.length; k++) {
            if (combinedArray[i] === uniqueArray[k]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueArray[uniqueArray.length] = combinedArray[i];
        }
    }
    return uniqueArray;
}

const arr1Unique = [1, 2, 2, 3, 3, 5, 6, 7, 8, 8];
const arr2Unique = [1, 2, 2, 3, 3, 5, 6, 7, 8, 8];
const arr3Unique = ['a', 'b', 'c', 'c', 'd', 'd', 'e'];
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(uniqueValues(arr1Unique, arr3Unique));
console.log(uniqueValues(arr1Unique, arr2Unique));
console.log(uniqueValues(array1, array2));

//3
function calculateAverageGrade(arr) {
    let totalGrade = 0;
    for (let student of students) {
        totalGrade += student.grade;
    }
    return (totalGrade / students.length).toFixed(1);
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students));


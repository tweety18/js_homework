// 1
function calcFibonacci(n) {
    if (n <= 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    else {
        console.log(n)
        return calcFibonacci(n - 1) + calcFibonacci(n - 2);
    }
}
console.log(calcFibonacci(7));

// 2

// 3
function moveElementsByOne(arr, set = new Set(), depth = 0) {
    if (depth === 0) {
        set.add(arr);
        set.add(arr.toReversed());
    }

    if (depth >= arr.length - 1) {
        return set;
    }

    const shiftedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const newIndex = (i + 1) % arr.length;
        shiftedArray[newIndex] = arr[i];
    }

    set.add(shiftedArray);
    set.add(shiftedArray.toReversed());

    return moveElementsByOne(shiftedArray, set, depth + 1);
}

console.log(moveElementsByOne([1, 2, 3]));

// [1, 2, 3] - original
// [3, 2, 1] - reverse

//do moving by 1 array.length-1 times ([1,2,3].length -1 === 2):
// [3, 1, 2] - move to the right by 1 element
// [2, 1, 3] - reverse

// [2, 3, 1] - move to the right by 1 element from prev ineration
// [1, 3, 2] - reverse




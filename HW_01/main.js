function sumArrayPromise(numbersArr) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(numbersArr.reduce((acc, el) => acc + el, 0)), 3000);
    })
}

sumArrayPromise([1,2,3,4,5]).then((res) => console.log(res));


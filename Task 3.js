function returnFunc(a) {
    const sumNumbers = function (b) {
        return a + b;
    }
    return sumNumbers;
}

console.log(returnFunc(5)(2));

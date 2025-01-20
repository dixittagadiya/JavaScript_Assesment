function myFunction(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}

console.log(myFunction([1, 2, 2, 3]));
console.log(myFunction([9, 9, 9, 99]));
console.log(myFunction([4, 3, 2, 1]));

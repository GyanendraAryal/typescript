"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
console.log(n);
function addData(num1, num2) {
    // return num1 + num2
    return "Hello From TypeScript";
}
let output = addData(10, 20);
console.log(output);
function sumOfArray(arr) {
    return arr.map((item) => item + 1);
}
let result = sumOfArray([19, 29]);
console.log(result);
let sumOfAnotherArray = (arr) => {
    return arr.reduce((num, acc) => num + acc, 0);
};
let sum = sumOfAnotherArray([10, 20, 30, 40, 50]);
console.log(sum);
function displayData() {
    console.log("Displaying Data...");
}
displayData();
// console.log(displayData());
//# sourceMappingURL=index.js.map
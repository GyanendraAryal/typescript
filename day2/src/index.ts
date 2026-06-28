let n: number = 10
console.log(n);


function addData(num1: number, num2: number) {
    // return num1 + num2
    return "Hello From TypeScript"
}

let output = addData(10, 20)
console.log(output);


function sumOfArray(arr: number[]): number[] {
    return arr.map((item: number): number => item + 1)
}
let result: number[] = sumOfArray([19, 29])
console.log(result);

let sumOfAnotherArray = (arr: number[]): number => {
    return arr.reduce((num: number, acc: number): number => num + acc, 0)
}

let sum = sumOfAnotherArray([10, 20, 30, 40, 50])

console.log(sum);


function displayData(): void {
    console.log("Displaying Data...");
}

displayData()
// console.log(displayData());

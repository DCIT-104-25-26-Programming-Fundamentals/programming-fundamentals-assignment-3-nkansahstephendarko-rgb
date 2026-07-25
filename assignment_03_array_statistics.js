// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage(arr) {
    const sum = calculateSum(arr);
    return sum / arr.length;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of values must be a positive integer.");
        return;
    }

    const numbers = [];
    for (let i = 0; i < n; i++) {
        const value = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(value);
    }

    console.log();
    console.log("Results:");
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${findMax(numbers)}`);
    console.log(`Minimum: ${findMin(numbers)}`);
}

main();
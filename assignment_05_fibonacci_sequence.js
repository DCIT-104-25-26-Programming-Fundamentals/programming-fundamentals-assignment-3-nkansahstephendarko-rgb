// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    let a = 0, b = 1;
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let a = 0, b = 1;
    while (a <= number) {
        if (a === number) {
            return true;
        }
        const next = a + b;
        a = b;
        b = next;
    }
    return false;
}

function main() {
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    console.log();

    const number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

main();
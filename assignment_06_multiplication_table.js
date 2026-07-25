// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function printTablesUpTo(n) {
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    for (let num = 1; num <= n; num++) {
        printTable(num);
        if (num !== n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    const number = readlineSync.questionInt("Enter a number: ");
    printTable(number);

    console.log();

    const n = readlineSync.questionInt("Enter N (for tables 1 to N): ");
    printTablesUpTo(n);
}

main();
// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function exponentiate(base, exponent) {
    return base ** exponent;
}

function printMenu() {
    console.log("============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        if (choice < 1 || choice > 7) {
            console.log("Error: Invalid choice. Please select a number from 1 to 7.");
            console.log();
            continue;
        }

        const a = readlineSync.questionFloat("Enter first number : ");
        const b = readlineSync.questionFloat("Enter second number: ");

        switch (choice) {
            case 1:
                console.log(`Result: ${a} + ${b} = ${add(a, b).toFixed(2)}`);
                break;
            case 2:
                console.log(`Result: ${a} - ${b} = ${subtract(a, b).toFixed(2)}`);
                break;
            case 3:
                console.log(`Result: ${a} * ${b} = ${multiply(a, b).toFixed(2)}`);
                break;
            case 4: {
                const result = divide(a, b);
                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(`Result: ${a} / ${b} = ${result.toFixed(2)}`);
                }
                break;
            }
            case 5: {
                const result = modulus(a, b);
                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(`Result: ${a} % ${b} = ${result.toFixed(2)}`);
                }
                break;
            }
            case 6:
                console.log(`Result: ${a} ** ${b} = ${exponentiate(a, b).toFixed(2)}`);
                break;
        }

        console.log();
    }
}

main();
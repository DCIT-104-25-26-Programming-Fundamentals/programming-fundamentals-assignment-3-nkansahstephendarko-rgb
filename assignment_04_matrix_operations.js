// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = readlineSync.question(`Enter row ${i + 1}: `).split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let line = '';
        for (let j = 0; j < matrix[i].length; j++) {
            line += String(matrix[i][j]).padStart(5);
        }
        console.log(line);
    }
}

function transposeMatrix(matrix, rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(a, b, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(a[i][j] + b[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(a, rowsA, colsA, b, rowsB, colsB) {
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += a[i][k] * b[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log("Matrix Operations Menu:");
    console.log("1. Transpose a Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");
    const choice = readlineSync.questionInt("Enter choice (1-3): ");

    if (choice === 1) {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        const matrix = readMatrix(rows, cols);
        const result = transposeMatrix(matrix, rows, cols);

        console.log();
        console.log("Original Matrix:");
        printMatrix(matrix);
        console.log();
        console.log("Transposed Matrix:");
        printMatrix(result);

    } else if (choice === 2) {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");

        console.log();
        console.log("Enter Matrix A:");
        const a = readMatrix(rows, cols);
        console.log("Enter Matrix B:");
        const b = readMatrix(rows, cols);

        const result = addMatrices(a, b, rows, cols);

        console.log();
        console.log("Sum Matrix:");
        printMatrix(result);

    } else if (choice === 3) {
        const rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
        const colsA = readlineSync.questionInt("Enter columns of Matrix A: ");
        const rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
        const colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

        if (colsA !== rowsB) {
            console.log("Error: Columns of A must equal rows of B for multiplication.");
            return;
        }

        console.log();
        console.log("Enter Matrix A:");
        const a = readMatrix(rowsA, colsA);
        console.log("Enter Matrix B:");
        const b = readMatrix(rowsB, colsB);

        const result = multiplyMatrices(a, rowsA, colsA, b, rowsB, colsB);

        console.log();
        console.log("Product Matrix (A x B):");
        printMatrix(result);

    } else {
        console.log("Invalid choice.");
    }
}

main();
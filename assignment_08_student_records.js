// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(student) {
    if (student.scores.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];
    }
    return sum / student.scores.length;
}

function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const numScores = readlineSync.questionInt("How many scores? ");

    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(', ')}`);
        console.log(`Average: ${calculateAverage(student).toFixed(2)}`);
        console.log("--------------------------------");
    }
}

function calculateAverageForStudent() {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(`${students[i].name}'s average score: ${calculateAverage(students[i]).toFixed(2)}`);
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

function printMenu() {
    console.log("================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                displayAllStudents();
                break;
            case 3:
                calculateAverageForStudent();
                break;
            case 4:
                console.log("Goodbye!");
                running = false;
                break;
            default:
                console.log("Error: Invalid choice. Please enter a number from 1 to 4.");
        }

        console.log();
    }
}

main();
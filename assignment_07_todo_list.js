// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// (instructions as given)
//

const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
    const task = readlineSync.question("Enter task: ");
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your task list is empty!");
        return;
    }

    console.log("Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log("Your task list is empty! Nothing to delete.");
        return;
    }

    viewTasks();
    const number = readlineSync.questionInt("Enter task number to delete: ");

    if (number < 1 || number > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    const removed = tasks[number - 1];
    tasks.splice(number - 1, 1);
    console.log(`Task "${removed}" has been removed.`);
}

function printMenu() {
    console.log("============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                viewTasks();
                break;
            case 3:
                deleteTask();
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
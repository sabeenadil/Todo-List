#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDoList = [];
let conditions = true;
console.log(chalk.blueBright.bold("\n\t Welcome to code with sabeen-Todo List Application\n"));
/*while(conditions){

let addTask = await inquirer.prompt([{
 
name: "task",
type: "input",
message: chalk.green("Enter Your New Task: "),

}]);

toDoList.push(addTask.task)

console.log(chalk.magenta(`${addTask.task} has been added in Todo-List successfully.`));

let addMoreTask = await inquirer.prompt([{

name: "addMore",
type: "confirm",
message: chalk.red("Do you want to add more task?"),
default: "false",
}]);
conditions = addMoreTask.addMore

}

console.log("Your updated Todo-List:" ,toDoList);*/
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([{
                name: "choices",
                type: "list",
                message: "select an option",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Delete Task") {
            await deleteTask();
        }
        else if (option.choices === "Update Task") {
            await updateTask();
        }
        else if (option.choices === "View Todo-List") {
            await viewTask();
        }
        else if (option.choices === "Exit") {
            conditions = false;
        }
    }
};
//function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task: ",
        }]);
    toDoList.push(newTask.task);
    console.log(`\n ${newTask.task} added successfully in Todo-List.`);
};
//function to view all Todo-List Tasks;
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
//function to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index number' of the task that you want to delete :",
        }]);
    let deleteTask = toDoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully \n`);
};
//function to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of task that you want to update: "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter the new task name: ",
        }
    ]);
    toDoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} has been updated successfully. [To view your updated list: Go to "View Todo-List"]`);
};
main();

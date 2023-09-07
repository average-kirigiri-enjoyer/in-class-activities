const inquirer = require("inquirer");
const fs = require("fs");

let content = "";

inquirer
    .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What languages do you know?",
        name: "languages",
    },
    {
        type: "input",
        message: "What is your preferred method of communcation?",
        name: "preferredCommuncation",
    },
    ])
    .then((response) =>
        content = response,
        fs.writeFile("./nameAndLanguages.txt", content)
    );


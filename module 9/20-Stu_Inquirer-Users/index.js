const inquirer = require("inquirer");
const fs = require("fs");

inquirer
	.prompt([
	{
		type: "input",
		message: "What is your name?",
		name: "name",
	},
	{
		type: "checkbox",
		message: "What languages do you know?",
		name: "languages",
		choices: ["HTML", "CSS", "JavaScript", "Arduino", "Python"],
	},
	{
		type: "list",
		message: "What is your preferred method of communcation?",
		name: "communcation",
		choices: ["Speech", "Hand signals", "Telepathy"],
	},
	])
	.then(function(data)
	{
		const name = `Name: ${data.name}`;
		const languages = `Languages: ${data.languages}`;
		const communcation = `Communcation Method: ${data.communcation}`;
		const userInputData = name + "\n" + languages + "\n" + communcation;

		fs.writeFile("./name.txt", userInputData, function(err)
		{
			if (err)
			{
				console.log(err);
			}
			else
			{
				console.log("data saved to name.txt");
			}
		});
	});
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
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
	name: "communication",
	choices: ["Speech", "Hand signals", "Telepathy"],
},])
.then(function(data)
{
	const name = `Name: ${data.name}`;
	const languages = `Languages: ${data.languages}`;
	const communication = `Communcation Method: ${data.communication}`;
	const userInputData = name + "\n" + languages + "\n" + communication;

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

/*
const inquirer = require('inquirer');
const fs = require('fs');
​
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
​
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
	*/
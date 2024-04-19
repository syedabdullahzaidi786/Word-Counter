#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("Welcome To Our Word-Counter App"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence:"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellow(`The words in your sentence are ${words.length}}`));
for (let i = 0; i < words.length; i++) {
    console.log(chalk.green(`Word ${i + 1} is ${words[i]}`));
}

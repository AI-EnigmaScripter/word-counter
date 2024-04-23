#! /usr/bin/env node
import  inquirer from 'inquirer';
import  chalk from 'chalk';

async function countWordsAndCharacters() {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'paragraph',
        message: 'Enter a paragraph:',
    });

    const paragraph = userInput.paragraph;

    const characters: string[] = paragraph.replace(/\s+/g, '').split(''); // Split the paragraph into single characters

    const formattedCharacters = characters.map(char => `[ '${char}' ]`).join(' '); // each character in square brackets and single quotes, then join them with space

    console.log(chalk.green('Formatted paragraph:'));
    console.log(chalk.yellow(formattedCharacters)); // Print the formatted paragraph

    const totalCharCount = characters.length; // Get the total character count of the paragraph
    console.log(chalk.green('Total character count:'), totalCharCount);
}

countWordsAndCharacters();

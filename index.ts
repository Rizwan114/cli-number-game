#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a rendom number (done)

// 2) user input for guessing number (done)

// 3) compare user input with computer generate numer and show result

const rendomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message:"please guess a number between 1-6:",
    },
]);

if(answers.userGuesseNumber === rendomNumber){
    console.log("congrats")
}else{
    console.log("wrong");   
}



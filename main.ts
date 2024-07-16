#! /usr/bin/env node

import inquirer from "inquirer";

const quiz:{
    question1 :string;
    question2 :string;
    question3 :string;
    question4 :string;
    question5 :string;
    question6 :string;
    question7 :string;
    question8 :string;
    question9 :string;
    question10 :string;
    }= await inquirer.prompt([
    {
     name: "question1",
     type: "list",
     message:"Which is the tallest mountain in the world?",
     choices: ["Nanga Parbat", "Passu Sar", "K-2", "Mount Everest"]    
    },
    {
        name: "question2",
        type: "list",
        message:"Which Planet is known as the red planet?",
        choices: ["Mars","Jupiter","Sun","Uranus"]
    },
    {
        name: "question3",
        type: "list",
        message:"What is the currency of Turkey?",
        choices: ["Lira", "Yen", "USD", "EUR"]
    },
    {
        name: "question4",
        type: "list",
        message:"Who is known as the father of modern Physics?",       
        choices: ["Max Plank", "Issac Newton", "Albert Einstein", "Galileo Galilei"]
    },
    {
        name: "question5",
        type: "list",
        message:"Which is the largest organ inside the human body?",
        choices: ["Brain", "Liver", "Heart", "Lungs"]
    },
    {
        name: "question6",
        type: "list",
        message:"When did Pakistan came into being?",
        choices: ["15 October,1558", "14 August,1949", "14 August,1947", "23 March,1940"]
    },
    {
        name: "question7",
        type: "list",
        message:"What is the national flower of Japan?",
        choices: ["Lavender", "Cherry Blossom", "Lily", "Rose"]
    },
    {
        name: "question8",
        type: "list",
        message:"What is the correct way to check if two values are equal in TypeScript or not?",
        choices: ["a === b", "a ==b", "a = b", "a !== b"]
    },
    {
        name: "question9",
        type: "list",
        message:"What is the only bird that can fly backward?",
        choices: ["Hummingbird", "Owl", "Sparrow", "Eagle"]
    },
    {
        name: "question10",
        type: "list",
        message:"What is the chemical symbol of Silver?",
        choices: ["Ag", "Pb", "Co2", "NaCl"]
    }
]);

let score: number = 0;

switch(quiz.question1) {
    case "Mount Everest":
    console.log("1. Correct!");
    ++score;
    break;
    default:
        console.log("1. Incorrect!");
}

switch(quiz.question2) {
    case "Mars":
    console.log("2. Correct!");
    ++score;
    break;
    default:
        console.log("2. Incorrect!");
}

switch(quiz.question3) {
    case "Lira":
    console.log("3. Correct!");
    ++score;
    break;
    default:
        console.log("3. Incorrect!");
}

switch(quiz.question4) {
    case "Albert Einstein":
    console.log("4. Correct!");
    ++score;
    break;
    default:
        console.log("4. Incorrect!");
}

switch(quiz.question5) {
    case "Liver":
    console.log("5. Correct!");
    ++score;
    break;
    default:
        console.log("5. Incorrect!");
}

switch(quiz.question6) {
    case "14 August,1947":
    console.log("6. Correct!");
    ++score;
    break;
    default:
        console.log("6. Incorrect!");
}

switch(quiz.question7) {
    case "Cherry Blossom":
    console.log("7. Correct!");
    ++score;
    break;
    default:
        console.log("7. Incorrect!");
}

switch(quiz.question8) {
    case "a !== b":
    console.log("8. Correct!");
    ++score;
    break;
    default:
        console.log("8. Incorrect!");
}

switch(quiz.question9) {
    case "Hummingbird":
    console.log("9. Correct!");
    ++score;
    break;
    default:
        console.log("9. Incorrect!");
}

switch(quiz.question10) {
    case "Ag":
    console.log("10. Correct!");
    ++score;
    break;
    default:
        console.log("10. Incorrect!");
}

console.log(`Score: ${score}`);
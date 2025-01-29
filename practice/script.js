const prompt = require('prompt-sync')();
// function arithMatic(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Both inputs should be Numbers!';
//     }
//     const sum = num1 + num2;
//     const sub = num1 - num2;
//     const mul = num1 * num2;
//     const div = num1 / num2;
//     return {
//         sum: sum,
//         sub: sub,
//         mul: mul,
//         div: div
//     };
// }

// const userInput1 = prompt("Enter the first number: ");
// const userInput2 = prompt("Enter the second number: ");

// const number1 = parseFloat(userInput1);
// const number2 = parseFloat(userInput2);

// const result = arithMatic(20,2);
// console.log(result);

function manuString(input){
    let trimInput = input.trim();
    let upperInput = trimInput.toUpperCase();
    let replacedInput = upperInput.replace("Hello", "Hi");
    let wordsArray = replacedInput.split(" ");
    return{
        original: input,
        trimmed: trimInput,
        upperInput: upperInput,
        replaced: replacedInput,
        words: wordsArray
    };
}

const result = manuString("  Hello, Guys!  ");
console.log(result);
































// function printCurrentPage(){
//     window.print();
// }

// function displayDateTime(){
//     const now = new Date();   
    
//     const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    
//     const day = days[now.getDay()];
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getHours()).padStart(2, '0');
//     const seconds = String(now.getHours()).padStart(2, '0');
    
//     const structuredDate = `Today is ${day}, and the current time is ${hours} : ${minutes} : ${seconds}.`;
    
//     console.log(structuredDate);

// }

// displayDateTime();
"use strict";
//My Name is Ahmer Raza and today is 11-07-2023.
//Program #1
const personName = "aHmer RAza";
const lowerCase = personName.toLocaleLowerCase(); //Made the person name in lowercase letter.
const upperCase = personName.toUpperCase(); //Made the person name in uppercase letter.
const convertToTitleCase = (name) => {
    const words = name.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
};
const titleCase = convertToTitleCase(personName);
console.log("Person Name in Lower Case: ", lowerCase);
console.log("Person Name in Upper Case: ", upperCase);
console.log("Person Name in Title Case: ", titleCase);
//My Name is Ahmer Raza and today is 11-07-2023.
//Program #2
//This program is printing the basic maathematical operation.
console.log("Addition: ", 4 + 4);
console.log("Subtraction: ", 12 - 4);
console.log("Multiplication: ", 2 * 4);
console.log("Division: ", 16 / 2);

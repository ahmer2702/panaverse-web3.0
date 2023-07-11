"use strict";
let favourite_places = ['Pakistan', 'London', 'New York', 'India', 'Canada', 'France'];
const printArray = (array) => {
    for (let place of array) {
        console.log(place);
    }
};
console.log("<============Printing Original Array==========>");
printArray(favourite_places);
console.log("<============Printing Array in alphabetical order==========>");
printArray([...favourite_places].sort());
console.log("<============Printing Original Array==========>");
printArray(favourite_places);
console.log("<============Printing Array in reverse alphabetical order==========>");
printArray([...favourite_places].sort().reverse());
console.log("<============Printing Original Array==========>");
printArray(favourite_places);
console.log("<============Printing Original Array in reverse==========>");
printArray(favourite_places.reverse());
console.log("<============Printing Reveresed Array to its original order==========>");
printArray(favourite_places.reverse());
console.log("<============Printing Original Array in alphabetical order==========>");
printArray(favourite_places.sort());
console.log("<============Printing Original Array in reverse alphabetical order==========>");
printArray(favourite_places.reverse());

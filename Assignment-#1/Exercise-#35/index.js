"use strict";
const animals = ["Dog", "Cat", "Tiger"];
for (let animal of animals) {
    if (animal.toLocaleLowerCase() === 'cat') {
        console.log(`I like "${animal}".`);
    }
    else if (animal.toLocaleLowerCase() === 'dog') {
        console.log(`I hate "${animal}".`);
    }
    else {
        console.log(`I love "${animal}".`);
    }
}
console.log(`All these animals have four legs and be good pet.`);

"use strict";
const magicians_name = ["Charlie", "Doubleyou", "Star Fox"];
let great_magicians_name = [];
const show_magician = (magicians_name) => {
    for (let magician of magicians_name) {
        console.log(magician);
    }
};
const make_great = (magicians_name) => {
    for (let i = 0; i < magicians_name.length; i++) {
        great_magicians_name.push(`Great ${magicians_name[i]}`);
    }
};
make_great([...magicians_name]);
show_magician(magicians_name);
show_magician(great_magicians_name);

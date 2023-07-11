"use strict";
const build_car = (manufacturer_name, model_name, ...args) => {
    let car = {
        manufacturer_name: manufacturer_name,
        model_name: model_name
    };
    for (const arg of args) {
        for (const key in arg) {
            car[key] = arg[key];
        }
    }
    return car;
};
const my_car = build_car("Toyota", "Camry", { color: "blue" }, { hasSunRoof: true });
console.log(my_car);

"use strict";
const order_sandwich = (items) => {
    console.log("The sandwich included the following items:");
    for (const item of items) {
        console.log(item);
    }
};
order_sandwich(["Chesse", "Egg", "Pepperoni"]);
order_sandwich(["Chesse", "Egg", "Pepperoni", "salad", "pickles"]);
order_sandwich(["Chesse", "Egg", "Pepperoni", "salad", "pickles", "mint", "black pepper"]);

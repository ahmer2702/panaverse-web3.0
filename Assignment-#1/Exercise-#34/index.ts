const pizzas: string[] = ["Fajita", "Tikka Booti", "Pepporoni"];

for (let pizza of pizzas) {
  if (pizza.toLocaleLowerCase() === 'fajita') {
    console.log(`I like "${pizza}" pizza.`);
  } else if (pizza.toLocaleLowerCase() === 'pepporoni') {
    console.log(`I love "${pizza}" pizza.`);
  } else {
    console.log(`I hate "${pizza}" pizza.`);
  }
}
console.log(`I really love pizza!`);
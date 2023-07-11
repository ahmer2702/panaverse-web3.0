const city_country = (city: string, country: string): string => {
  return `${city}, ${country}`;
}
const pair1: string = city_country('Paris', 'France');
const pair2: string = city_country('Lahore', 'Pakistan');
const pair3: string = city_country('Delhi', 'India');
console.log(pair1);
console.log(pair2);
console.log(pair3);
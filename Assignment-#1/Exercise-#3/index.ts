const personName: string = "aHmer RAza";
const lowerCase: string = personName.toLocaleLowerCase();
const upperCase: string = personName.toUpperCase();
const convertToTitleCase = (name: string): string => {
  const words = name.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ');
}
const titleCase: string = convertToTitleCase(personName);
console.log("Person Name in Lower Case: ", lowerCase);
console.log("Person Name in Upper Case: ", upperCase);
console.log("Person Name in Title Case: ", titleCase);

let guests: string[] = ["Azhar Mehmood","Ahsan Khan","Talha Chaudhry"];

const iterateGuests = (guests: string[]) => {

  for (const guest of guests) { 
    console.log(`Hello ${guest}, you are invite to dinner on 1-07-2023 at Monal, Lahore`);
  }

}
iterateGuests(guests);
console.log(`==================> Oops "Talha Chaudhry" can't make the dinner`);

let updatedGuestList = guests.filter(guest => guest !== "Talha Chaudhry");
updatedGuestList.push("Ahmer Raza");

console.log("Resending invitation........"); 
iterateGuests(updatedGuestList);

console.log("<=======I have found the bigger dinning table so there is need to invite new guests=======>");
updatedGuestList.unshift("Yousaf Ali");
updatedGuestList.splice(2, 0, 'Alina');
updatedGuestList.unshift("Ali Kazmi");

iterateGuests(updatedGuestList);

console.log("<=======I have found that my bigger table will not arrived at time so i am shriniking my list=======>");
for (let i = 0; updatedGuestList.length !== 2; i++) {
  console.log(`Sorry ${updatedGuestList.pop()}, "You are not invited to the dinner`);
}

for (const guest of updatedGuestList) { 
  console.log(`Hello ${guest}, you are still invited to the dinner!`); 
}

updatedGuestList = [];
iterateGuests(updatedGuestList);
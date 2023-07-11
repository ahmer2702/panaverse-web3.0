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
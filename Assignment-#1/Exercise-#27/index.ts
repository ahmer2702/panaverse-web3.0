//version 1
let alien_color: string = 'green';

if (alien_color.toLowerCase() === 'green') { 
  console.log("Player just earned 5 points for shooting the alien");
} else if (alien_color.toLowerCase() === 'yellow') {
  console.log("Player just earned 10 points for shooting the alien");
} else {
  console.log("Player just earned 15 points for shooting the alien");
}

//version 2
alien_color = 'yellow';

if (alien_color.toLowerCase() === 'green') { 
  console.log("Player just earned 5 points for shooting the alien");
} else if (alien_color.toLowerCase() === 'yellow') {
  console.log("Player just earned 10 points for shooting the alien");
} else {
  console.log("Player just earned 15 points for shooting the alien");
}

//version 3
alien_color = 'red';

if (alien_color.toLowerCase() === 'green') { 
  console.log("Player just earned 5 points for shooting the alien");
} else if (alien_color.toLowerCase() === 'yellow') {
  console.log("Player just earned 10 points for shooting the alien");
} else {
  console.log("Player just earned 15 points for shooting the alien");
}
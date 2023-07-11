let usernames: string[] =[];
if (!usernames.length) {
  console.log("We need to find some users!");
} else {
  for (let user of usernames) { 
    if (user.toLowerCase() === 'admin') {
      console.log("Hello admin, would you like to see the status report?")
    } else {
      console.log(`Hello ${user}, thanks for logging in agian.`);
    }
  }
}
let usernames: string[] =["admin", "ali", "ahsan", "ahmer", "talha"]
for (let user of usernames) { 
  if (user.toLowerCase() === 'admin') {
    console.log("Hello admin, would you like to see the status report?")
  } else {
    console.log(`Hello ${user}, thanks for logging in agian.`);
  }
}
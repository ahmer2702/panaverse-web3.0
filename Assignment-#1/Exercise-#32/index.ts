let current_users: string[] =["admin", "Ali", "ahsan", "ahmer", "talha"];
let new_users: string[] =["ahmed", "ali", "ahsan", "alina", "yousaf"];

for (let user of new_users) { 
  if (current_users.find(person => person.toLowerCase() === user.toLowerCase())) {
    console.log(`username "${user}" already exist. you need to enter new name`);
  } else {
    console.log(`${user}: This user name is available`);
  }
}
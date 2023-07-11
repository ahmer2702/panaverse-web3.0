const magicians_name: string[] = ["Charlie", "Doubleyou", "Star Fox"];
let great_magicians_name: string[] = [];
const show_magician = (magicians_name: string[]) => {
  for (let magician of magicians_name) { 
    console.log(magician);
  }
};

const make_great = (magicians_name: string[]) => {
  for (let i=0; i < magicians_name.length; i++) { 
    great_magicians_name.push(`The Great ${magicians_name[i]}`);
  }
};

make_great([...magicians_name]);
show_magician(magicians_name);
show_magician(great_magicians_name);
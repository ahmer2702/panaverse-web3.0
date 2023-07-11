const magicians_name: string[] = ["Charlie", "Doubleyou", "Star Fox"];

const show_magician = (magicians_name: string[]) => {
  for (let magician of magicians_name) { 
    console.log(magician);
  }
};

const make_great = (magicians_name: string[]) => {
  for (let i=0; i < magicians_name.length; i++) { 
    magicians_name[i] = `The Great ${magicians_name[i]}`;
  }
};

make_great(magicians_name);
show_magician(magicians_name);
const magicians_name: string[] = ["Charlie", "Doubleyou", "Star Fox"];
const show_magician = (magicians_name: string[]) => {
  for (let magician of magicians_name) { 
    console.log(magician);
  }
}
show_magician(magicians_name);
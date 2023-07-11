const make_shirt = (size: string = 'Large' , message: string = "I Love Typescript!") => {
  console.log(`The size of the shirt: ${size}`);
  console.log(`The message: ${message}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I like Python!');
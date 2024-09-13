//explicit
let firstName: string = "Dylan";
console.log(firstName);
//implicit
// let firstName = "Dylan";
// firstName = 33;

//unable to infer will set the type data to anything
const json = JSON.parse("55");
console.log(typeof json);

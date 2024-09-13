//this is how you define a string
const names: string[] = [];
names.push("hewwo");
console.log(names);

//using readonly prevent you for changing the value
const namesReadOnly: readonly string[] = [];
// namesReadOnly.push("hewwo"); => this throws error

//array can also be infered
const numbers = [1, 2, 3];
numbers.push(4);   
// numbers.push("2"); => will throw error cause ts infer this as a number
let head: number = numbers[0];


//casting => overriding the types of variable
let x: unknown = 'hello';
console.log((x as string).length);

console.log((<string>x).length);

//fore casting
// console.log(((x as unknown) as number).length); => x is not actually a number so this will return undefined
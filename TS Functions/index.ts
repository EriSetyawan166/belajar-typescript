//return type
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

//void return type
function printHello(): void {
    console.log("hello");
}
printHello();

//with parameters
function mulitply(a: number, b: number) {
    return a * b;
}
console.log(mulitply(2, 3));

//optional Parameters
function add(a: number, b: number, c?: number) { //=> c can be empty
    return a + b + (c || 0);
}
console.log(add(1, 2, 3));
console.log(add(1, 2));

//default parameter
function pow(value: number, exponent: number = 10) { //=> if exponent is not specify then it wil be assign 10
    return value ** exponent;
}
console.log(pow(2, 5));
console.log(pow(2));

//named parameter
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));

//rest parameters => must be an array
function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add2(10, 10, 10, 10, 10, 10, 10, 10));

//type alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1; //value automatically assign into number

console.log(negateFunction(2));
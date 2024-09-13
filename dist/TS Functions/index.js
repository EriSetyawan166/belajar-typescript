"use strict";
//return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void return type
function printHello() {
    console.log("hello");
}
printHello();
//with parameters
function mulitply(a, b) {
    return a * b;
}
console.log(mulitply(2, 3));
//optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2, 3));
console.log(add(1, 2));
//default parameter
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(2, 5));
console.log(pow(2));
//named parameter
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//rest parameters => must be an array
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add2(10, 10, 10, 10, 10, 10, 10, 10));
const negateFunction = (value) => value * -1; //value automatically assign into number
console.log(negateFunction(2));

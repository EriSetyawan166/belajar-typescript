"use strict";
//functions
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 12));
console.log(createPair(100, 12));
//classes
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('mynumber');
value.setValue(10);
console.log(value.toString());
const wrappedValue = { value: 10 };
console.log(wrappedValue);

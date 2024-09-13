"use strict";
//members types
class Person {
    constructor() {
        this.name = "Default name";
    }
}
const person = new Person();
person.name = "Jane";
console.log(person);
//members visibility
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person2 = new Person2("Jane");
console.log(person2.getName());
//parameter properties
class Person3 {
    constructor(name) {
        this.name = name;
    }
    getName2() {
        return this.name;
    }
}
const person3 = new Person3("Jane");
console.log(person3.getName2());
//readonly
class Person4 {
    constructor(name) {
        //name can't be change after this initial definition, it can only be in declaration or in the constructor
        this.name = name;
    }
    getName3() {
        return this.name;
    }
}
const person4 = new Person4("Jane");
console.log(person4.getName3());
class Rectangle {
    constructor(width2, height2) {
        this.width2 = width2;
        this.height2 = height2;
    }
    getArea() {
        return this.width2 * this.height2;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
//inheritance extends and override
class Square extends Rectangle {
    constructor(width2) {
        super(width2, width2);
    }
    //getArea function inherited from Rectangle
    //override
    toString() {
        return `Square[width=${this.width2}]`;
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());
console.log(mySq.toString());
//Abstract Classes
class polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle2 extends polygon {
    constructor(width3, height3) {
        super();
        this.width3 = width3;
        this.height3 = height3;
    }
    getArea() {
        return this.width3 * this.height3;
    }
}
const myRect3 = new Rectangle2(10, 20);
console.log(myRect3.getArea());

//members types

class Person {
    name: string = "Default name";
}
    
const person = new Person();
person.name = "Jane";

console.log(person);

//members visibility
class Person2 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("Jane");
console.log(person2.getName())

//parameter properties
class Person3 {
    public constructor(private name: string) { }
    public getName2(): string {
        return this.name;
    }
}
const person3 = new Person3("Jane");
console.log(person3.getName2());

//readonly
class Person4 {
    private readonly name: string;
    
    public constructor(name: string) {
        //name can't be change after this initial definition, it can only be in declaration or in the constructor
        this.name = name;
    }
    public getName3(): string {
        return this.name;
    }
}
const person4 = new Person4("Jane");
console.log(person4.getName3());

//inheritance: implements
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width2: number, protected readonly height2: number) {}    
    public getArea(): number {
        return this.width2 * this.height2;
    }
    
    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());

//inheritance extends and override
class Square extends Rectangle {
    public constructor(width2: number) {
        super(width2, width2);
    }

    //getArea function inherited from Rectangle

    //override
    public override toString(): string {
        return `Square[width=${this.width2}]`;
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());
console.log(mySq.toString());

//Abstract Classes
abstract class polygon {
    public abstract getArea(): number;
    
    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle2 extends polygon {
    public constructor(protected readonly width3: number, protected readonly height3: number){
        super();
    }

    public getArea(): number {
        return this.width3 * this.height3;
    
    }
}

const myRect3 = new Rectangle2(10, 20);
console.log(myRect3.getArea());


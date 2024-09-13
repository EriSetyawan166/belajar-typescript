type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car4: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car4);

//interfaces => similar to type aliasses the difference is they only apply to object types
interface Rectangle {
    height: number,
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

console.log(rectangle);

//extending interfaces => creating a new interface with the same properties as the original plus something new

interface ColoredRectangle extends Rectangle {
    color: string
};

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 20,
    color: "Yellow"
};
console.log(coloredRectangle);
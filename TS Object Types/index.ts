const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

//type inference
const car2 = {
    type: "Toyota",
};
car.type = "Ford";
// car.type = 2; => is not assignable cause typescript already inference type as a string

//example without using optional property
// const car3: { type: string, mileage: number } = { => this is error cause mileage is null
//     type: "toyota",
// }

//example using optional property for null safety
const car3: { type: string, mileage?: number } = {
    type: "toyota",
}

//index signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "Fifty" => produce error cause it mus be a number type


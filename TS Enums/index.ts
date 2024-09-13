//numeric enums

enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection); //this will result in 0 cause it is the first
// currentDirection = 'North'; => is not assignable cause it is numeric by default

//initialized numeric
enum CardinalDirectionsInitialized { //this will auto increment for the next value
    North = 1,
    East,
    South,
    West
}
console.log(CardinalDirectionsInitialized.North); //printing 1
console.log(CardinalDirectionsInitialized.West); //printing 4

//fully initialized numeric
enum statusCode { //this will not auto increment for the next value
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(statusCode.NotFound); //printing 404
console.log(statusCode.BadRequest); //printing 400

//string enums
enum CardinalDirectionsString { // => as the name suggest, pretty straight forward
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
console.log(CardinalDirectionsString.North); //printing north
console.log(CardinalDirectionsString.West); //printing west
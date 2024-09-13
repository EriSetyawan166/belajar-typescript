"use strict";
//numeric enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
console.log(currentDirection); //this will result in 0 cause it is the first
// currentDirection = 'North'; => is not assignable cause it is numeric by default
//initialized numeric
var CardinalDirectionsInitialized;
(function (CardinalDirectionsInitialized) {
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["North"] = 1] = "North";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["East"] = 2] = "East";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["South"] = 3] = "South";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["West"] = 4] = "West";
})(CardinalDirectionsInitialized || (CardinalDirectionsInitialized = {}));
console.log(CardinalDirectionsInitialized.North); //printing 1
console.log(CardinalDirectionsInitialized.West); //printing 4
//fully initialized numeric
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound); //printing 404
console.log(statusCode.BadRequest); //printing 400
//string enums
var CardinalDirectionsString;
(function (CardinalDirectionsString) {
    CardinalDirectionsString["North"] = "North";
    CardinalDirectionsString["East"] = "East";
    CardinalDirectionsString["South"] = "South";
    CardinalDirectionsString["West"] = "West";
})(CardinalDirectionsString || (CardinalDirectionsString = {}));
console.log(CardinalDirectionsString.North); //printing north
console.log(CardinalDirectionsString.West); //printing west

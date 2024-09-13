"use strict";
//union 
function printStatusCode(code) {
    console.log(`My status code is ${code}`);
    // console.log(`My status code is ${code.toUpperCase()}`) => can't be done cause toUpperCase does not exist on number
}
printStatusCode(404);
printStatusCode('404');

"use strict";
//define the tuple
let ourTuple;
//initialize
ourTuple = [5, false, 'hm'];
//initialize wrong order
// ourTuple = ['hm', false, 5]; => this will throw an error
//read only tuple this is great because tuples only have strongly defined types for the initial value
ourTuple.push('something new and wrong');
console.log(ourTuple);
const ourReadOnlyTuple = [5, true, "test"];
// ourReadOnlyTuple.push("hehe"); => we can push a readonly tuple
//named tuples
const graph = [55.2, 41.3];
//destructuring tuples
const graph2 = [55.2, 41.3];
const [x2, y2] = graph;

"use strict";
// without any it will says error because of an unmatch type
// let u = true;
// u = "string";
// Math.round(u);
//with any it will disable error checking
let v = true;
v = "string";
Math.round(v);
//type unknown => well it's unknown duhh
let w = 1;
w = "string";
// Math.round(w); => we can't use unknown types
//type never => what is this even for???
// let x: never = true; => will throw error
//type undefined and null => it is what it is (and yes i don't know what this is for)
let y = undefined;
let z = null;

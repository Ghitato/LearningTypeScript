"use strict";
exports.__esModule = true;
var greetings = "Hello there";
//Cannot redeclare block-scoped variable 'greetings'. --> Use export{} for now
//let greetings: string
//     Also valid if you will be defining greetings later
var myNum = 7;
console.log(greetings);
console.log(myNum);
//export{} can remove some errors from the typescript buil

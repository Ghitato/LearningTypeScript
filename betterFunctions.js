"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
//The :number after function addTwo(num: number) will make sure that only a number can be returned
console.log(addTwo(3));
//---------------------------------------------------------------------------------------------------------------------------------------
function getUpper(passedString) {
    passedString.toUpperCase();
    return passedString;
}
console.log(getUpper("uppercase"));
//---------------------------------------------------------------------------------------------------------------------------------------
function signUpUser(name, email, password, isPaid) {
    return "Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password, ", Paid: ").concat(isPaid);
}
console.log(signUpUser("George", "sample@sample.ca", "StrongPASSWORD", true));
//---------------------------------------------------------------------------------------------------------------------------------------
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
console.log(loginUser("George", "sample@sample.ca", "StrongPASSWORD"));
//We are not providing a boolean here since we defined "isPaid" as false by default
//---------------------------------------------------------------------------------------------------------------------------------------
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
//We would need to use a Union type in order to return this properly
console.log(getValue(5));
//---------------------------------------------------------------------------------------------------------------------------------------
var getHello = function (exampleString) {
    return "";
};
var heros = ["spiderman", "ironman", "thor"];
heros.map(function (hero) {
    return "The hero's name is ".concat(hero);
});
//TyepScript is smart enough to know that "hero" should be set to a string but the below also work
heros.map(function (hero1) {
    return "The hero's name is ".concat(hero1);
});
heros.map(function (hero2) {
    return "The hero's name is ".concat(hero2);
});
heros.map(function (hero3) {
    return "The hero's name is ".concat(hero3);
});
//---------------------------------------------------------------------------------------------------------------------------------------
function consoleError(errorMessage) {
    console.log(errorMessage);
}
//The : void after the function consoleError(errorMessage: string) is meant to explicitly state that we are not returning anything 
function handleError(errorMessage) {
    throw new Error(errorMessage);
}

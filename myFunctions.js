"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(3));

function getUpper(passedString) {
    passedString.toUpperCase();
    return passedString;
}
console.log(getUpper("uppercase"));

function signUpUser(name, email, password, isPaid) {
    return "Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password, ", Paid: ").concat(isPaid);
}
console.log(signUpUser("George", "sample@sample.ca", "StrongPASSWORD", true));

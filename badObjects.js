"use strict";
exports.__esModule = true;
var User = {
    name: "George",
    email: "sample@sample.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Joe", isPaid: false, goodPassword: false };
//Can pass more vairables than needed
createUser(newUser);
//------------------------------------------------------------------------------------------------------------------------------------
function createCourse() {
    return { name: "ReactJS", price: 399 };
}

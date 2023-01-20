"use strict";
exports.__esModule = true;
//type is a keyword
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
//What (user: User) is doing is it is making sure that the data passed in adheres to the "type User = {}""
createUser({ name: "", email: "", isActive: true });
//readonly is there so you will never be able to change _id
//? will indicate the type value is optional to be passed in
var myUser = {
    _id: "1234",
    name: "John",
    email: "sample@sample.com",
    isActive: true
};
myUser.email = "sample@gmail.com";

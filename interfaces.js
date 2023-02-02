var newUser = {
    role: "Administrator",
    dbID: 10,
    email: "g@g.com",
    userID: 1,
    gitHubToken: "Yes",
    startTrial: function () {
        return "Trial Started";
    },
    startTrial2: function () {
        return "Trial Started";
    },
    getCoupon: function (couponName, valueOff) {
        return valueOff;
    }
};
/*
type User = {
    readonly dbID: number,
    email: string,
    userID: number
    googleID?: number
}
The non-interface way
 */
/*
In TypeScript, interface and type are both used to define the structure of an object, but they have different purposes and capabilities.

Interface is used to define a structure for a class, object, or function. An interface defines a contract for a type,
specifying what properties and methods are required and what their types should be. Interfaces can be used to describe objects,
functions, arrays, and more.

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};


Type is used to define a custom type alias in TypeScript.
It is a way of defining a new type based on an existing type, whether it is a primitive, an object, or another custom type.
A type can be used to describe an object, a union of multiple types, an intersection of multiple types, or a type that
includes both a set of properties and methods.

type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

In summary, interface is best used for defining the structure of objects, classes, and functions,
while type is best used for creating custom type aliases.
In many cases, interface and type can be used interchangeably, but in some cases, interface provides more capabilities,
such as the ability to define optional properties and extending multiple types.

*/ 

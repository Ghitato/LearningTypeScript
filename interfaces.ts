interface User {
    readonly dbID: number,
    email: string,
    userID: number,
    googleID?: number, //? means optional

    //First way to define a method
    startTrial: () => string,
    //Second way to define a method
    startTrial2(): string,

    getCoupon(couponName: string, valueOff: number): number //The return type will be a number
}

//We can reopen the interface by doing this (Type cannot do this)
interface User {
    gitHubToken: string
}

//Using inheritance
interface Admin extends User {
    //We are getting all the properties of User in Admin now
    role: "Administrator" | "Junior" | "Senior" 
}

const newUser: Admin = {
    role: "Administrator",
    dbID: 10, 
    email: "g@g.com", 
    userID: 1,
    gitHubToken: "Yes",

    startTrial: () => {
        return "Trial Started"
    },
    startTrial2: () => {
        return "Trial Started"
    },
    getCoupon: (couponName: "Default Coupon", valueOff: 5) => {
        return valueOff
    }
}


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

export {}
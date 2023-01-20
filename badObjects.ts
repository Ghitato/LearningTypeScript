
const User = {
    name: "George",
    email: "sample@sample.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

let newUser = {name: "Joe", isPaid: false, goodPassword: false}
//Can pass more vairables than needed
createUser(newUser)  

//------------------------------------------------------------------------------------------------------------------------------------

function createCourse():{name: string, price: number}{
    return {name: "ReactJS", price: 399}
}
//What happens when a function returns an object?

// This is the syntax you use
//function createCourse()       --> An function name (object)
//function createCourse():{}    --> This is a return type
//function createCourse():{}{}  --> THis is a definition

export{}
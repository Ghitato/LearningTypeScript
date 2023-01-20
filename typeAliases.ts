
type User = {
    name: string,
    email: string,
    isActive: boolean
}
//type is a keyword

function createUser(user: User){
    return {name:"", email:"", isActive: true}
}
//What (user: User) is doing is it is making sure that the data passed in adheres to the "type User = {}""
createUser({name:"", email:"", isActive: true})

//Can also do the following below (will make sure that the return type also adheres to the User tyep)
// function createUser(user: User): User{
 
// }

//---------------------------------------------------------------------------------------------------------------------

type User1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean 
    creditCardDetails?: number
}
//readonly is there so you will never be able to change _id
//? will indicate the type value is optional to be passed in

let myUser: User1 = {
    _id: "1234",
    name: "John",
    email: "sample@sample.com",
    isActive: true 
}

myUser.email = "sample@gmail.com"
//myUser._id = "4321" <-- b/c it was marked as readonly, TS will complain

//---------------------------------------------------------------------------------------------------------------------

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string 
}

type cardDetails = cardNumber & cardDate & {
    cvv: string
}
//Can combine types into one with "&" and also add more info inside


export{}
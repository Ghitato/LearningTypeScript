function addTwo(num: number): number{
    return num + 2
}

//The :number after function addTwo(num: number) will make sure that only a number can be returned

console.log(addTwo(3));

//---------------------------------------------------------------------------------------------------------------------------------------

function getUpper(passedString: string){
    passedString.toUpperCase()
    return passedString
}

console.log(getUpper("uppercase"));

//---------------------------------------------------------------------------------------------------------------------------------------

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
    return `Name: ${name}, Email: ${email}, Password: ${password}, Paid: ${isPaid}`;
}

console.log(signUpUser("George", "sample@sample.ca", "StrongPASSWORD", true));

//---------------------------------------------------------------------------------------------------------------------------------------

let loginUser = (name: string, email: string, password: string, isPaid: boolean = false) => {
}

console.log(loginUser("George", "sample@sample.ca", "StrongPASSWORD" ))
//We are not providing a boolean here since we defined "isPaid" as false by default

//---------------------------------------------------------------------------------------------------------------------------------------

function getValue(myVal: number): string | boolean{
    if (myVal > 5){
        return true
    }
    return "200 OK"
}
//We would need to use a Union type in order to return this properly
console.log(getValue(5)) 

//---------------------------------------------------------------------------------------------------------------------------------------

const getHello = (exampleString): string =>{
    return ""
}

const heros = ["spiderman", "ironman", "thor"]

heros.map(hero => {
    return `The hero's name is ${hero}`
})
//TyepScript is smart enough to know that "hero" should be set to a string but the below also work

heros.map((hero1: string) => {
    return `The hero's name is ${hero1}`
})

heros.map<string>(hero2 => {
    return `The hero's name is ${hero2}`
});

heros.map((hero3): string =>{
    return `The hero's name is ${hero3}`
})

//---------------------------------------------------------------------------------------------------------------------------------------

function consoleError(errorMessage: string): void{
    console.log(errorMessage)
}
//The : void after the function consoleError(errorMessage: string) is meant to explicitly state that we are not returning anything 

function handleError(errorMessage: string): never{
    throw new Error(errorMessage)
}
//This is done to make handling errors more robust
//never
//  Is meant to be used in functions that throws exceptions or ones that terminate the program or if there is nothing left in a union

//The void type is used to indicate that a function does not return a value. 
//  It is commonly used for functions that perform some side-effect, like logging or modifying the state of an object, 
//  but do not return a useful value.

//The never type is used to indicate that a function will never return a value. 
//  It is commonly used for functions that throw an exception or that have an infinite loop.

export{}  
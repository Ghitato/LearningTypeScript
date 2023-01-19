function addTwo(num: number){
    return num + 2
}

console.log(addTwo(3));

function getUpper(passedString: string){
    passedString.toUpperCase()
    return passedString
}

console.log(getUpper("uppercase"));

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
    return `Name: ${name}, Email: ${email}, Password: ${password}, Paid: ${isPaid}`;
}

console.log(signUpUser("George", "sample@sample.ca", "StrongPASSWORD", true));

let loginUser = (name: string, email: string, password: string, isPaid: boolean = false) => {

}

console.log(loginUser("George", "sample@sample.ca", "StrongPASSWORD" ))
//We are not providing a boolean here since we defined "isPaid" as false by default


export{}
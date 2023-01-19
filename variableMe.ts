let greetings: string = "Hello there";
//Cannot redeclare block-scoped variable 'greetings'. --> Use export{} for now
//let greetings: string
//     Also valid if you will be defining greetings later

let myNum: number = 7;
let isLoggedIn: boolean = true;

console.log(greetings);
console.log(myNum)
console.log(isLoggedIn)

//any (an example where using any is acceptable, b/c many other cases are not)
// --> None really, should be used as last resort to resolve typechecking

// let  hero;

// function getHero(){
//     return "thor"
// }

// hero = getHero()



export{}
//export{} can remove some errors from the typescript buil

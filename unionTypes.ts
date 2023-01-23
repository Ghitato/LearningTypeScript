let score1: number = 33
score1 = 44
//score1 = "44"

let score2: number | string = 33
score2 = 44
score2 = "44"

//------------------------------------------------------------------------------------------------------------------------------------------------

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let George: User | Admin = {name: "uGeorg e", id: 10}
George = {username: "aGeorge", id: 11}
//If you remove Admin then TS would throw up an error for the line above 

//------------------------------------------------------------------------------------------------------------------------------------------------

function getDBId(id: number | string){
    //making some API calls
    if(typeof id === "string"){
        id.toLocaleLowerCase
    } else if (typeof id === 'number') {
        id *= 2;
    }
    console.log(`DB id is ${id }`)
}
getDBId(3)
getDBId("4")

//------------------------------------------------------------------------------------------------------------------------------------------------

//const data: number[] = [1, 2, 3, "4"]
//const data: string[] = [1, 2, 3, "4"]
const data: (number | string)[] = [1, 2, 3, "4"]

//------------------------------------------------------------------------------------------------------------------------------------------------

let pi: 3.145 = 3.145
//pi = 3.14 <-- Not allowed

//------------------------------------------------------------------------------------------------------------------------------------------------

let seatAllignment: "aisle" | "middle" | "window" 
seatAllignment = "aisle"
//seatAllignment = "crew" <-- Not allowed
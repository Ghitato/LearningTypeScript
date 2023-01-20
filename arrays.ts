
const superHeros: string[] = []
//The superHeros array will be a type of string array
const heroPower: number[] = []
//The superHeros array will be a type of number array
const heroRank: Array<number> = []
const heroTitle: Array<string> = []

superHeros.push("Jim") 
heroPower.push(1)

//------------------------------------------------------------------------------------------------------------------------

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [] 

allUsers.push({name: "", isActive: true})
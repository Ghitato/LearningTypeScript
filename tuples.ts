//Tuples only available in TS
//Tuples are a kind of specialized array

const user: (string | number)[] = ["ye", 1]
//Standard array

const tuple_user: [string, number, boolean] = ["ye", 1, true]
//Tuple
//b/c we defined the order of the array, you must provide the types in that order

let rgb: [number, number, number] = [0, 1, 2]
//Classic example with RGB

type User = [number, string]
const newUser: User = [1434, "g@g.com"]
//Using a type with tuples

export{}
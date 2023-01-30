//Special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric

//Exist b/c there are certain times where you want to restrict somebodies options
//  ex) Ecommerce, only want pending, bought, delivered

const AISLE = 0
const MIDDLE = 1
const WINDOW = 2
//Not ideal code, can use enums

//Written with enum
enum SeatChoice{
    AISLE, //(enum member) SeatChoice.AISLE = 0
    MIDDLE, //(enum member) SeatChoice.MIDDLE = 1
    WINDOW = "Window", //(enum member) SeatChoice.WINDOW = "Window"
    WILDCARD = 10, //(enum member) SeatChoice.WILDCARD = 10
    OTHERWILDCARD //(enum member) SeatChoice.OTHERWILDCARD = 11
}
const giveSeat = SeatChoice.AISLE

//Written with const enum
const enum smallJSSeatChoice{
    AISLE, //(enum member) SeatChoice.AISLE = 0
    MIDDLE, //(enum member) SeatChoice.MIDDLE = 1
    WINDOW = "Window", //(enum member) SeatChoice.WINDOW = "Window"
    WILDCARD = 10, //(enum member) SeatChoice.WILDCARD = 10
    OTHERWILDCARD //(enum member) SeatChoice.OTHERWILDCARD = 11
}
const giveSmallJSSeat = smallJSSeatChoice.WILDCARD

export{}
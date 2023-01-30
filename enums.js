"use strict";
//Special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric
exports.__esModule = true;
//Exist b/c there are certain times where you want to restrict somebodies options
//  ex) Ecommerce, only want pending, bought, delivered
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
//Not ideal code, can use enums
//Written with enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice["WINDOW"] = "Window";
    SeatChoice[SeatChoice["WILDCARD"] = 10] = "WILDCARD";
    SeatChoice[SeatChoice["OTHERWILDCARD"] = 11] = "OTHERWILDCARD"; //(enum member) SeatChoice.OTHERWILDCARD = 11
})(SeatChoice || (SeatChoice = {}));
var giveSeat = SeatChoice.AISLE;
var giveSmallJSSeat = 10 /* smallJSSeatChoice.WILDCARD */;

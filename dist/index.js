"use strict";
// Basic Types
let id = 5;
let firtName = "Christy";
//any data types
let x = "hello";
//array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//tuple
let person = [26, "chris", true];
//tuple array
let employee;
employee = [
    [1, "chris"],
    [2, "francis"],
    [3, "benny"],
];
//Union
let pid;
//Enum: define set of constraint
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

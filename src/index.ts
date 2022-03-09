// Basic Types

let id: number = 5;
let firtName: string = "Christy";
//any data types
let x: any = "hello";

//array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

//tuple
let person: [number, string, boolean] = [26, "chris", true];

//tuple array
let employee: [number, string][];

employee = [
  [1, "chris"],
  [2, "francis"],
  [3, "benny"],
];

//Union
let pid: string | number;

//Enum: define set of constraint

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

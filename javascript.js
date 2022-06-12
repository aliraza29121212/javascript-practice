// // // // // // // // // // // // // console.log("Hello World");

// // // // // // // // // // // // // => 2
// // // // // // // // // // // // "use strict";
// // // // // // // // // // // // //intro to variables

// // // // // // // // // // // // // Variable can store some information
// // // // // // // // // // // // // We can use that information later
// // // // // // // // // // // // // We can change that that information later

// // // // // // // // // // // // // declare a variable

// // // // // // // // // // // // // var firstName = "Ali Raza";

// // // // // // // // // // // // // use a variable
// // // // // // // // // // // // console.log(firstName);

// // // // // // // // // // // // // change Value

// // // // // // // // // // // // firstName = "Hamza";
// // // // // // // // // // // // console.log(firstName);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (3)
// // // // // // // // // // // //

// // // // // // // // // // // // Rules for naming variables

// // // // // // // // // // // // you cannot start with number
// // // // // // // // // // // // example :-
// // // // // // // // // // // // 1value (Invalid)
// // // // // // // // // // // // value1 (Valid)

// // // // // // // // // // // var value1 = 20;
// // // // // // // // // // // console.log(value1 + 30);

// // // // // // // // // // // // You can only use undersore _ or dollar symbol
// // // // // // // // // // // // first_name (Valid)
// // // // // // // // // // // // _firstname (Valid)

// // // // // // // // // // // // first$name (Valid)
// // // // // // // // // // // // $firstname (Valid)

// // // // // // // // // // // // You cannot use spaces

// // // // // // // // // // // // First name (Invalid)

// // // // // // // // // // // // Convention
// // // // // // // // // // // // Start with samll letter and use camelCase

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (4)
// // // // // // // // // // // //

// // // // // // // // // // // let Keyword
// // // // // // // // // // // declare variable with let Keyword

// // // // // // // // // // let firstName = "Ali raza";
// // // // // // // // // // console.log(firstName);
// // // // // // // // // // firstName = "Hammas";
// // // // // // // // // // console.log(firstName);

// // // // // // // // // // // block scope vs function scope (Coerd leter in this video)

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (5)
// // // // // // // // // // // //

// // // // // // // // // // Declare Constants
// // // // // // // // // // Const cannot change the value

// // // // // // // // // const pi = 3.45;
// // // // // // // // // console.log(pi);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (6)
// // // // // // // // // // // //

// // // // // // // // // Sting indexing

// // // // // // // // let firstname = "ali";

// // // // // // // // // a l i
// // // // // // // // // 0 1 2

// // // // // // // // // console.log(firstname[0]);

// // // // // // // // // length of string
// // // // // // // // // firstname.length

// // // // // // // // // console.log(firstname.length);

// // // // // // // // // last index : length -1
// // // // // // // // console.log(firstname[firstname.length - 2]);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (7)
// // // // // // // // // // // //

// // // // // // // // trim()
// // // // // // // // topUpperCase()
// // // // // // // // topLowerCase()
// // // // // // // // slice

// // // // // // // let firstName = "aLi";
// // // // // // // // console.log(firstName.length);
// // // // // // // // firstName = firstName.trim();
// // // // // // // // console.log(firstName.length);
// // // // // // // // firstName = firstName.toUpperCase();
// // // // // // // // firstName = firstName.toLowerCase();
// // // // // // // // console.log(firstName);

// // // // // // // // Start index
// // // // // // // // end index

// // // // // // // let newString = firstName.slice(0, 2);
// // // // // // // console.log(newString);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (8)
// // // // // // // // // // // //

// // // // // // // type of operator

// // // // // // // data types (primitive data types)
// // // // // // // String
// // // // // // // Number
// // // // // // // booleans
// // // // // // // undefined
// // // // // // // null
// // // // // // // bigInt
// // // // // // // symbol

// // // // // // let age = 22;
// // // // // // let firstName = "Ali";
// // // // // // // console.log(typeof firstName);

// // // // // // // Convert Number to String
// // // // // // age = age + "";
// // // // // // console.log(typeof age);

// // // // // // let age = 44;
// // // // // // age = String(age);
// // // // // // console.log(typeof age);

// // // // // // // Convert string to Number

// // // // // // myStrng = +"Ali";
// // // // // // console.log(typeof myStrng);

// // // // // let age = "44";
// // // // // age = Number(age);
// // // // // console.log(typeof age);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (9)
// // // // // // // // // // // //

// // // // // String concatenation

// // // // // let string1 = "Ali";
// // // // // let string2 = "Raza";

// // // // // let fullName = string1 + " " + string2;
// // // // // console.log(fullName);

// // // // // let string1 = "20";
// // // // // let string2 = "40";

// // // // // let newString = string1 + string2;
// // // // // console.log(newString);

// // // // // Convert string to Number

// // // // let string1 = "20";
// // // // let string2 = "40";

// // // // let newString = +string1 + +string2;
// // // // console.log(newString);
// // // // console.log(typeof newString);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (10)
// // // // // // // // // // // //

// // // // Template Strings

// // // let age = 20;
// // // let firstName = "Ali";

// // // // let aboutMe = "my name is " + firstName + " and my age is " + age;

// // // let aboutMe = `my name is ${firstName} and my age is ${age}`;
// // // console.log(aboutMe);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (11)
// // // // // // // // // // // //

// // // Undefine

// // let firstName;
// // console.log(typeof firstName);
// // firstName = "Ali Raza";
// // console.log(typeof firstName, firstName);

// // // Null

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Ali raza";
// console.log(typeof myVariable, myVariable);

// console.log(typeof null); ==> javascript bug,error

// BigIn

// let myNumber = BigInt(33);
// let sameMyNumber = 127n;
// console.log(myNumber + sameMyNumber);
//console.log(typeof myNumber);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (12)
// // // // // // // // // // // //

// booleans & comparison operator

// booleans -> (true,false)

// let num1 = 4;
// let num2 = "4";
// console.log(num1 > num2);

// == vs === Operator

// console.log(num1 === num2);

// != vs !== Operator

// console.log(num1 !== num2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (14)
// // // // // // // // // // // //

// if else condition

// let age = 17;

// if (age >= 18) {
//   console.log("User Can play Game");
// } else {
//   console.log("user Cannot play Game");
// }

// let num = 13;
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("Odd");
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (13)
// // // // // // // // // // // //

// Falsyy Values

// 1) false
// 2) ""
// 3) null
// 4) undefine
// 5) 0

// Truthly Values

// 1) "abc"
// 2) 1, -1

// let firstName = "Ali raza";

// if (firstName) {
//   console.log(firstName);
// } else {
//   console.log("FirstName is Kinda Empty");
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (15)
// // // // // // // // // // // //

//Ternary Operator

// let age = 15;
// let drink;

// if (age >= 5) {
//   drink = "coffee";
// } else {
//   drink = "milk";
// }
// console.log(drink);

//Ternary Operator (Use)

// let age = 13;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (16)
// // // // // // // // // // // //

// and or operator

// let firstName = "Ali raza";
// let age = 22;

// if (firstName[0] === "A") {
//   console.log("your name  start with A");
// }

// if (age > 18) {
//   console.log("you are above 18");
// }

// if (firstName[0] === "A" || age > 18) {
//   console.log("inside if");
// } else {
//   console.log("inside else");
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (17)
// // // // // // // // // // // //

// nested if else

// Winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let WinningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if (userGuess === WinningNumber) {
//   console.log("your guess is right");
// } else {
//   if (userGuess < WinningNumber) {
//     console.log("to low");
//   } else {
//     console.log("to high");
//   }
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (18)
// // // // // // // // // // // //

// if
// else if
// else if
// else if
// else

// let tempInDegree = 30;

// if (tempInDegree < 0) {
//   console.log("extremely cold outside");
// } else if (tempInDegree < 16) {
//   console.log("it is cold outside");
// } else if (tempInDegree < 25) {
//   console.log("wheather is okay");
// } else if (tempInDegree < 35) {
//   console.log("lets go for swim");
// } else if (tempInDegree < 45) {
//   console.log("turn on AC");
// } else {
//   console.log("too hot");
// }

// let tempInDegree = 30;

// if (tempInDegree > 40) {
//   console.log("to hot");
// } else if (tempInDegree > 30) {
//   console.log("Lets go for swim");
// } else if (tempInDegree > 20) {
//   console.log("wheather is cool");
// } else if (tempInDegree > 10) {
//   console.log("it is very cold outside");
// } else {
//   console.log("extremely cold");
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (19)
// // // // // // // // // // // //

//   <----Switch Statement--->

// let day = 3;
// if (day === 0) {
//   console.log("sunday");
// } else if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesdy");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid Day");
// }

// Using Switch Statement:

// let day = 0;

// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thirsday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (20)
// // // // // // // // // // // //

// While Loop

// let i = 0;

// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

// Using While Loop:

// let i = 0;
// while (i <= 9) {
//   console.log(i);
//   i++;
// }
// console.log(`current value of i is ${i}`);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (21)
// // // // // // // // // // // //

// While Loop example

// let num = 10;
// let total = 0;

// total = total + 1;
// total = total + 2;
// total = total + 3;
// total = total + 4;
// total = total + 5;
// total = total + 6;
// total = total + 7;
// total = total + 8;
// total = total + 9;
// total = total + 10;

// console.log(total);

// let num = 10;
// let total = (num * (num + 1)) / 2;
// console.log(total);

// Using While loop:

// let num = 100;
// let total = 0;
// let i = 0;

// while (i <= 100) {
//   total = total + i;
//   i++;
// }
// console.log(total);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (22)
// // // // // // // // // // // //

// Intro to For Loop:
// print 0 to 9

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }
// console.log("value of i is", i);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (23)
// // // // // // // // // // // //

// for loop example

// let total = 0;
// let num = 100;
// for (let i = 0; i <= num; i++) {
//   total = total + i;
// }
// console.log(total);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (24)
// // // // // // // // // // // //

// (Break) keyword

// (continue) keyword

// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("hello there");

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (25)
// // // // // // // // // // // //

// do while loop

// let i = 0;
// while (i <= 9) {
//   i++;
//   console.log(i);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 9);
// console.log("value of i is", i);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (26)
// // // // // // // // // // // //

// Intro to arrays
// reference type
// how to create arrays

// Oder collection of items

// let fruits = ["apple", "grapes", "banana"];
// let numbers = [1, 2, 3, 4, 5, 5];
// let mixed = [1, 2, 3.2, null, undefined];
// console.log(fruits);
// console.log(numbers);
// console.log(mixed);

// let fruits = ["apple", "grapes", "banana"];
// console.log(fruits);
// fruits[1] = "Mango";
// console.log(fruits);

// let fruits = ["apple", "grapes", "banana"];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// let obj = {};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (27)
// // // // // // // // // // // //

// array push

// array pop

// let fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);
// Push

// fruits.push("Banana", "Orange");
// console.log(fruits);

// pop
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruid is", poppedFruit);

// Unshift
// fruits.unshift("pineapple", "stabary");
// console.log(fruits);

// shift
// let removedFruits = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is", removedFruits);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (28)
// // // // // // // // // // // //

// primitive vs reference data type

// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num2++;
// console.log("after incrementing num2");
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

// reference types
// array
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (29)
// // // // // // // // // // // //

// how to clone array
// hoe to concatenate two array

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);

// new way
// spread operator

// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray];
// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (30)
// // // // // // // // // // // //

// for loop on array

// let fruits = ["apple", "mango", "grapes", "banana"];

// for (let i = 0; 1 <= 9; i++) {
//   console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);

// let fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//   fruits2.push(fruits[i].toLocaleUpperCase());
// }
// console.log(fruits2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (31)
// // // // // // // // // // // //

// use const for creating array
// heap memory --> (Stored) ["apple","mango"]

// const fruits = ["apple", "mango"];
// fruits.push("banana");
// console.log(fruits);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (32)
// // // // // // // // // // // //

// While loop in array

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while (i < fruits.length) {
//   fruits2.push(fruits[i].toUpperCase());
//   i++;
// }
// console.log(fruits2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (33)
// // // // // // // // // // // //

// for of loop in array
//const fruits = ["apple", "mango", "grapes", "banana"];
// fruits2 = [];
// console.log(fruits);

//for (let fruit of fruits) {
//fruits2.push(fruit.toUpperCase());
//console.log(fruit);
//}
// console.log(fruits2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (34)
// // // // // // // // // // // //

// for in loop in array

// const fruits = ["apple", "mango", "grapes", "banana"];
// const fruits2 = [];
// for (let index in fruits) {
//   fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (35)
// // // // // // // // // // // //

// array destructing

// const myArray = ["value1", "value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myVar1, myVar2, ...myNewArray] = myArray;
// myVar1 = "Value Change kr di ha mny";
// let myNewArray = myArray.slice(2);
// console.log("value of myvar1", myVar1);
// console.log("value of myvar2", myVar2);
// console.log(myNewArray);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (36)
// // // // // // // // // // // //

// Objects reference type haii!!
// arrays are good but not sufficient
// for real world data
// object stored key value pairs
// object don't have index

// how to create object

// const person = { name: "Ali Raza", age: "21" };
// const person = {
//   name: "AliRaza",
//   age: 21,
//   hobbies: ["guitar", "sleeping", "cricket"],
// };
// console.log(person);

// how to access data from objects
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pairs to objects

// person.gender = "male";
// person["gender"] = "male"
// console.log(person);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (37)
// // // // // // // // // // // //

// difference between dot and bracket notaion

// const key = "email";
// const person = {
//   name: "Ali",
//   age: 21,
//   "person hobbies": ["guitar", "sleeping", "cricket"],
// };
// console.log(person["person hobbies"]);
// person[key] = "aliraza291212@gmail.com";
// console.log(person);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (38)
// // // // // // // // // // // //

// how to iterate object

// const person = {
//   name: "Ali",
//   age: 21,
//   gender: "male",
// };

// for in loop
// object.key

// for (let key in person) {
//   console.log(person[key]);
//   console.log(`${key}:${person[key]}`);
//   console.log(key, " : ", person[key]);
// }

// Object.keys

// console.log(typeof Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// for of loop
// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (39)
// // // // // // // // // // // //

// computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// const obj = {};
// obj[value1] = key2;
// obj[value2] = key1;

// console.log(obj);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (40)
// // // // // // // // // // // //

// Spread operator

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2];
// const newArray = [..."1233456677"];
// console.log(newArray);

// spread operator in object

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key3: "value3",
//   key4: "value4",
// };

// const newObj = { ...obj1, ...obj2 };
// const newObj = { ...obj1, ...obj2, key66: "value66" };

// console.log(newObj);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (41)
// // // // // // // // // // // //

// object destructing

// const band = {
//   bandName: "led zepplein",
//   famousSong: "Stairway to heaven",
//   year: 1992,
//   anotherFamousSong: "Kashmir",
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

// let { bandName, famousSong, ...restprops } = band;
// let { bandName: val1, famousSong: val2 } = band;

// console.log(restprops);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (42)
// // // // // // // // // // // //

// objeccts inside array
// very useful in real world applications

// const users = [
//   { userId: 1, firstName: "Ali", gender: "male" },
//   { userId: 2, firstName: "Hamza", gender: "male" },
//   { userId: 3, firstName: "Hammas", gender: "male" },
// ];

// for (let user of users) {
//   console.log(user);
// }

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (43)
// // // // // // // // // // // //

// Nested destructuring

// const users = [
//   { userId: 1, firstName: "Ali", gender: "male" },
//   { userId: 2, firstName: "Hamza", gender: "male" },
//   { userId: 3, firstName: "Hammas", gender: "male" },
// ];

// const [
//   { firstName: user1firstName, userId },
//   ,
//   { gender: user3gender, userId: usernum },
// ] = users;
// console.log(user1firstName);
// console.log(user3gender);
// console.log(userId);
// console.log(usernum);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (44)
// // // // // // // // // // // //

// Function expression

// function singHappyBirthday() {
//   console.log("happy birthday to you .......");
// }
// singHappyBirthday();

// const singHappyBirthday = function () {
//   console.log("happy birthday to you .......");
// };
// singHappyBirthday();

// function sumTwoNumbers(number1, number2) {
//   return number1 + number2;
// }

// const returnedValue = sumTwoNumbers(4, 6);
// console.log(returnedValue);

// isEven
// input : 1 number
// output : true , false

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(8));

// function firstChar(anyString) {
//   return anyString[0];
// }
// console.log(firstChar("Ali"));

// function findTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// const myArray = [1, 3, 4, 5, 6, 87];
// const ans = findTarget(myArray, 4);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (46)
// // // // // // // // // // // //

// Arrow functions

// const singHappyBirthday = function(){
//     console.log("Happy birthday to you!!");
// }

// const singHappyBirthday = () => {
//   console.log("Happy birthday to you!!");
// };
// singHappyBirthday();

// const sumThreeNumbers = function (number1, number2, number3) {
//   return number1 + number2 + number3;
// };

// const sumThreeNumbers = (number1, number2, number3) => {
//   return number1 + number2 + number3;
// };
// const ans = sumThreeNumbers(2, 4, 7);
// console.log(ans);

// const isEven = function (number) {
//   return number % 2 === 0;
// };

// const isEven = (number) => {
//   return number % 2 === 0;
// };
// console.log(isEven(7));

// const firstChar = function (anyString) {
//   return anyString[0];
// };

// const firstChar = (anyString) => {
//   return anyString[0];
// };
// console.log(firstChar("Hammas"));

// const findTarget = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

// const myArray = [1, 3, 4, 5, 6, 87];
// const ans = findTarget(myArray, 4);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (47)
// // // // // // // // // // // //

// Hoisting

// hello();
// function hello() {
//   console.log("Hello World");
// }
// hello();

// console.log(hello);
// const hello = "hello world";
// console.log(hello);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (48)
// // // // // // // // // // // //

// Function inside function

// function app() {
//   const myFunc = () => {
//     console.log("Hello from myfunc");
//   };

//   const addTwo = (num1, num2) => {
//     return num1 + num2;
//   };

//   const mul = (num1, num2) => num1 * num2;

//   console.log("inside app");

//   myFunc();
//   console.log(addTwo(4, 6));
//   console.log(mul(4, 6));
// }

// app();

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (49)
// // // // // // // // // // // //

//lexical scope

// const myvar = "value1";

// function myApp() {
//   function myFanc() {
//      const myvar = "value2";

//     const myFanc2 = () => {
//       console.log("inside myfunc", myvar);
//     };
//     myFanc2();
//   }

//   console.log(myvar);
//   myFanc();
// }

// myApp();

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (50)
// // // // // // // // // // // //

// block scope vs function scope

// let and const are block scope
// var is a function scope

// {
//   const firstName = "Ali";
//   console.log(firstName);
// }

// {
//   const firstName = "Hammas";
//   console.log("this is", firstName);
// }

// const firstName = "Hamza";
// console.log("this is", firstName);

// if (true) {
//   var firstname = "Ali";
//   console.log(firstname);
// }
// console.log(firstname);

// function myApp() {
//   if (true) {
//     var firstName = "Ali";
//     console.log(firstName);
//   }

//   if (true) {
//     console.log(firstName);
//   }
//   console.log(firstName);
// }

// myApp();

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (51)
// // // // // // // // // // // //

// default parameters

// function addTwo(a, b) {
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }

// function addTwo(a, b = 0) {
//   return a + b;
// }

// const ans = addTwo(8);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (52)
// // // // // // // // // // // //

// rest parameters

// function myFunc(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`b is`, c);
// }

// myFunc(3, 5, 7, 2, 8, 2, 8, 3);

// function addAll(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total = total + number;
//   }
//   return total;
// }
// const ans = addAll(2, 4, 6, 8, 9);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (53)
// // // // // // // // // // // //

// Param destructuring

// object
// react

// const person = {
//   firstName: "Ali",
//   gender: "male",
// };

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }

// function printDetails({ firstName, gender }) {
//   console.log(firstName);
//   console.log(gender);
// }

// printDetails(person);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (54)
// // // // // // // // // // // //

// callback function

// function myFanc2(name) {
//   console.log("inside my func 2");
//   console.log(`your name is ${name}`);
// }

// function myFanc(callback) {
//   console.log("Hello there");
//   callback("Ali");
// }
// myFanc(myFanc2);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (55)
// // // // // // // // // // // //

// function returning function

// function myFanc() {
//   function hello() {
//     return "hello world";
//   }
//   return hello;
// }

// const ans = myFanc();
// console.log(ans());

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (56)
// // // // // // // // // // // //

// important array methods

// const numbers = [4, 7, 2, 9];

// function multiplyBy2(number, index) {
//   console.log(`index is ${index} number is ${number}`);
//   //   console.log(`${number}*2 = ${number * 2}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

// forEach

// const numbers = [4, 7, 2, 9];

// function myFunc(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function (number, index) {
//   console.log(number * 3, index);
// });

// const users = [
//   { firstname: "Aliraza", age: 21 },
//   { firstname: "Hammas", age: 20 },
//   { firstname: "Hamza", age: 19 },
//   { firstname: "Ramzan", age: 22 },
// ];

// users.forEach(function (user) {
//   console.log(user.firstname);
// });
// users.forEach((user)=>{
//     console.log(user.firstname);
// })

// for (let user of users) {
//   console.log(user.firstname);
// }

// map
// filter
// reduce

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (57)
// // // // // // // // // // // //

// map method

// const numbers = [3, 4, 6, 8, 2];

// const square = function (number) {
//   return number * number;
// };

//inside map
// const squareNumber = numbers.map((number, index) => {
//   return `index: ${index}, ${number * number}`;
// });
// console.log(squareNumber);

// const users = [
//   { firstname: "Aliraza", age: 21 },
//   { firstname: "Hammas", age: 20 },
//   { firstname: "Hamza", age: 19 },
//   { firstname: "Ramzan", age: 22 },
// ];

// const userName = users.map((user) => {
//   return user.firstname;
// });
// console.log(userName);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (58)
// // // // // // // // // // // //

// filter method
// const numbers = [1, 4, 6, 4, 2, 87, 9, 3, 6, 7];

// const isEven = function (number) {
//   return number % 2 === 0;
// };

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (59)
// // // // // // // // // // // //

// Reduce

// const numbers = [1, 2, 3, 4, 5, 6];

// // aim : sum of All the number in array

// const sum = numbers.reduce((accumulator, currentVlaue) => {
//   return accumulator + currentVlaue;
// }, 100);

// console.log(sum);

// accumulator , currentValue , return
//  1               2              3
//  3               3              6
//  6               4              10
// 10               5              15
// 15               6              21

// const userCart = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "laptop", price: 22000 },
//   { productId: 2, productName: "tv", price: 15000 },
// ];
// const totalAmount = userCart.reduce((totalPrice, currentproduct) => {
//   return totalPrice + currentproduct.price;
// }, 0);
// console.log(totalAmount);

// totalprice          currentValue         return
// 0                      {}              12000
// 12000                 22000            34000
// 34000                 15000            49000

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (60)
// // // // // // // // // // // //

// sort method
// ASCII table
// Char : ASCII value

// sorting

// 5,9,1200,400,300
// 5,9,400,1200,300 (expected)

// const numbers = [5, 9, 1200, 400, 300];
// numbers.sort();
// console.log(numbers);

// const userName = ["Ali", "Hammas", "ramzan", "hamza"];
// userName.sort();
// console.log(userName);

// const numbers =[5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(numbers)

// Price low to high

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 1, productName: "p2", price: 300 },
//   { productId: 1, productName: "p3", price: 3000 },
//   { productId: 1, productName: "p4", price: 200 },
//   { productId: 1, productName: "p5", price: 8800 },
//   { productId: 1, productName: "p6", price: 3400 },
// ];

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (61)
// // // // // // // // // // // //

// low to high
// products.sort((a, b) => {
//   return a.price - b.price;
// });

// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(lowToHigh);

// Find method

// const myArray = ["Helo", "cat", "dog", "lion"];

// // function isLength3(string) {
// //   return string.length === 3;
// // }

// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

// const users = [
//   { userId: 1, userName: "harshit" },
//   { userId: 2, userName: "Ali" },
//   { userId: 3, userName: "Hamza" },
//   { userId: 4, userName: "Hammas" },
//   { userId: 5, userName: "ramzan" },
// ];

// const myUser = users.find((user) => {
//   return user.userId === 3;
// });
// console.log(myUser);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (62)
// // // // // // // // // // // //

// Every method

// const numbers = [2, 4, 6, 9, 10];

// const ans = numbers.every((number) => number % 2 === 0);
// console.log(ans);

// const userCart = [
//   { product: 1, productName: "mobile", price: 1200 },
//   { product: 2, productName: "mobile", price: 3200 },
//   { product: 3, productName: "mobile", price: 5200 },
// ];

// const ans = userCart.every((cartItem) => cartItem.price < 30000);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (63)
// // // // // // // // // // // //

// Some Method

// const numbers = [3, 5, 11, 9];

// kya ek bi number esa hai jo even ha
// true

// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);

// const userCart = [
//   { product: 1, productName: "mobile", price: 1200 },
//   { product: 2, productName: "mobile", price: 3200 },
//   { product: 3, productName: "mobile", price: 5200 },
// ];
// const ans = userCart.some((cartItem) => cartItem.price > 100);
// console.log(ans);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (64)
// // // // // // // // // // // //

// Fill method
// value , start , end

// const myArray = new Array(10).fill(0);
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myArray.fill(0, 2, 5);
// console.log(myArray);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (65)
// // // // // // // // // // // //

// splice method

// Start, delete , insert

// const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItem = myArray.splice(1, 1);
// console.log("deleted item", deletedItem);

// insert
// myArray.splice(1, 0, "inserted item");
// console.log(myArray);

// insert and delete
// myArray.splice(1, 2, "inserted item1", "inserted itme2");
// console.log(myArray);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (66)
// // // // // // // // // // // //

// Iterables
// jispe hum for of loop laga sakein
// String , array are iterable

// const firstName = "Harshit";
// for (let char of firstName) {
//   console.log(char);
// }

// const items = ["item1", "item2", "itme3"];
// for (let item of items) {
//   console.log(item);
// }

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access har sakte hai
// example :- string

// const firstName = "Ali";
// console.log(firstName.length);
// console.log(firstName[1]);

// // // // // // // // // // // //
// // // // // // // // // // // //===============> (67)
// // // // // // // // // // // //

// Sets (it is iterable)
// store data
// sets also have its own method
// No index-based access
// Order is not guranted
// unique items only (no duplicates allowd)

// const items = ["item1", "item2", "itme3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// if (numbers.has(1)) {
//   console.log("1 is present");
// } else {
//   console.log("1 is not present");
// }
// console.log(numbers);

// for (let number of numbers) {
//   console.log(number);
// }

// const myArray = [1, 2, 2, 3, 3, 4, 5, 5, 6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);

// let length = 0;
// for (let element of uniqueElements) {
//   length++;
// }
// console.log(length);

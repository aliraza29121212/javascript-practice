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

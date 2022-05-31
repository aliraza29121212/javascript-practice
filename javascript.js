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

// const fruits = ["apple", "mango", "grapes", "banana"];
// fruits2 = [];
// console.log(fruits);

// for (let fruit of fruits) {
//   fruits2.push(fruit.toUpperCase());
// }
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

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
// // // // // // // // // // // //===============> (11)
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

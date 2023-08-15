//console.log("Hello JavaScript");
/*
   HTML - <!--  -->
   CSS - 
   JS - //
*/

// 1] var  - Functional Scope

//2] let 3]const
// 10 + 20

// var x;   // Variable Declaration
// x = 10;  // Variable Initialization

// var StudentName = 10;
// console.log(typeof (StudentName));

// var x = 10;
// var X = 10;

// var x = "Hello";
// var x =  "World";

// var x = 20;
// console.log(x);

/*
    Variable Declaration Rule 
    1. Variable must start with alphabates OR Underscore (_) OR $
    2. Variable Should not be start with number 
    3. varibale should not contain white space in between variable name. 
    4. variable declaration should not start with special symbols (@, #, %, &)
    5. Do not use keyword as variable 
*/
// 13-06-2023
//var, let, const

//typeof(value)
/*
var Name = "Demo Data";
var Num = 20;
var Flag = true;
var pi = 3.14;

let StudentName = "Hello Student";
let Age = 30;
let Result = true;
let percentage = 90.30;

const City = "Pune";
const House = 400;
const Collection = false;
const Value = 65.25;

var No1 = 10;
var No2 = 20;

let Num01 = 10;
let Num02 = 20;

const Data01 = 10;
const Data02 = 20;
*/
// 10, 20
/*
 Scope -
 1] Functional Scope 
 2] Block Scope 

 *Local Scope 
 *Global Scope 

 var - functional Scope 

 let and const - Block Scope 
 
 Datatypes - 

 Primary 
 1. number  - 1, 100, 90.52, -5
 2. string  - "Hello", 'Hello', '100'
 3. boolean - true, false 
 4. BigInt - BigInt(877778575548557)
 5. undefined - 
 6. null      - Empty (But Not 0)

 Object Typed / Non-Primary

 Array - []
 Object - {}

 - JSON 
*/

// var Name = null;

// console.log(typeof (Name));

/*
    1. Arithmatic Operator 
        +, -, *, **, /, %, ++, -- 

        Increment - 
             1. Pre Increment 
             2. Post Increment 

        Decrement - 
             1. Pre Decrement 
             2. Post Decrement 

     2. Comparison Operator / Relational Operator 
         ==, ===, !=, !==, >, <, >=, <=, ?

     3. Assignment Operator 
     
         =, +=, -=, *=, /=, %=, **=

     4. Logical Operator 
     
           &&, ||, !

     5. Bitwise 
          
          &, |, ~, ^, <<, >>


          Math.pow(20,2) => 20^2
*/

//console.log(10 ** 2);

// x++; // x + 1  Post Increment
// ++x; // x + 1  Pre Increment
/*
var x = 10;
const y = x++; // x + 1

console.log(x); // 11
console.log(y); // 10


let a = 3;
const b = ++a;  // a + 1

console.log(a); // 4
console.log(b); // 4

// x-- => post decrement
// --x => pre decrement

let p = 10;
let q = p--;  // post decrement 

console.log("p: ",p); //  9
console.log("q: ",q); //  10


let m = 10;
let n = --m;  // pre decrement

console.log(m); // 9
console.log(n); // 9
*/

// var x = 10;   // number
// var y = "10"; // string
// console.log(x == y); // true
// console.log(x === y); // false

// console.log(1 === 1); //  true
// console.log("1" === 1); //  false

// console.log(1 === true); //  false
// console.log(1 == true); //  true

// console.log(0 === false); //  false
// console.log(0 == false); // true


//

// var StudentName = "Ram";
// var English = 40;
// var Maths = 60;
// var history = 80;
// var science = 90;

// var Name1 = "XYZ";
// var Name2 = "PQR";
// var Name3 = "LMN";

//var StudentDetails = [40, 50, 60, 70, 80];
//const Num = [10, 20, 30, 40, 50]; // object

//const StudentDetails = [10, "Hello", true, 907514864, "Demo"];
//console.log(StudentDetails[StudentDetails.length - 1]);

// let a = 0;
// let b = 0;

// while (a < 3) {
//     a++;
//     b = b + a;
// }
// console.log(b);

/*
var x = [10, 15, 22, 36, 25]; 
var ArrLength = x.length;  // 6 - 1 // 5

var SumOfAll = 0;
var SumOfEven = 0;

var a = 0;                       /// a = 1

while (a != ArrLength) { 

    if (x[a] != 0)
    {
        if (x[a] % 2 == 0) { 
            SumOfEven = SumOfEven + x[a];  //10
        }

        SumOfAll = SumOfAll + x[a];
    }
    a++;
}

console.log("All : ", SumOfAll);
console.log("Even : ", SumOfEven);

*/
/*
var str = "WEB";  // BEW
var RevStr = "";

var i = str.length - 1; // 2 

while (i >= 0){  
    RevStr = RevStr + str[i];
    i--;
}

console.log(RevStr);
*/


// Continue

// var i = 0;
// var Sum = 0;

// while (i < 10) {
//     i++;
//     if (i === 5) {
//         continue;
//     }
//     console.log(i + "\n");
//     Sum += i; // Sum = Sum + i
// }

// console.log("Sum : ",Sum);
// for loop
/*
var arr = [10, 20, 30, 40, 50];

var ArrLength = arr.length; // 5
let sum = 0;

for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}

console.log(sum);
console.log(i);
*/


// var str = "WEB";  // BEW
// var RevStr = "";

// var i = str.length - 1; // 2

// while (i >= 0){
//     RevStr = RevStr + str[i];
//     i--;
// }

// console.log(RevStr);

// var str = "WEB DEVELOPMENT";
// var StrRev = "";
// for (let i = str.length - 1; i >= 0; i--){
//     StrRev = StrRev + str[i];
// }
// console.log(StrRev);

// let OutputData = 0;

// for (let i = 0; i < 10; i++){
//     if (i == 5) {
//         continue;
//     }

//     OutputData += i;
// }

// console.log("Summation of all numbers is : " + OutputData);

// console.log(`Summation of all numbers is : ${OutputData}`);

// var Num = [15, 16, 10, 20];

// var Mult = 1;

// for (let i = 0; i < Num.length; i++){
//     Mult = Mult * Num[i];
// }

// console.log(Mult);


//  string - WEBx86
//  Reverse String - 86xBEW

// var str = "NAYAN";
// var Result = "";

// for (let i = str.length - 1; i >= 0; i--){
//     Result = Result + str[i];    //  Result += str[i];
// }

// if (str == Result) {
//     console.log(`Givent String ${str} is pallindrome`);
// } else {
//     console.log(`Givent String ${str} is Not pallindrome`);
// }

//1.

// var a = 0;
// var b = 0;

// while (a < 10) {
//     a++;
//     if (a === 5) {
//         continue;
//     }
//     b = b + a;
// }
// console.log(b);

//2.

// var i = 0;

// while (i >= 0) {
//     console.log("WELCOME");
//     i++;
// }


// var x = 0;
// var y = 5;

// do {
//     console.log("WELCOME");
//     x++;
// } while (x < y)

/*
    per > 35 && per < 60 => D
    per > 60 && per < 70 =>  C 
    per > 70 && per < 80 => B 
    per > 80 && per < 90 => A
    per > 90    => A+

    Fail

// */

// var StudentMarks = [95, 80, 90, 96, 89];
// var SumOfGievnMarks = 0;
// var percentage = 0;

// for (let i = 0; i < StudentMarks.length; i++){
//     SumOfGievnMarks += StudentMarks[i];
// }

// percentage = (SumOfGievnMarks / 500) * 100;
// console.log(`Percentage = ${percentage}`);

// if (percentage >= 35 && percentage < 60) {
//     console.log("D");
// } else if (percentage >= 60 && percentage < 70) {
//     console.log("C");
// } else if (percentage >= 70 && percentage < 80) {
//     console.log("B");
// } else if (percentage >= 80 && percentage < 90) {
//     console.log("A");
// } else if (percentage >= 90) {
//     console.log("A+");
// } else {
//     console.log("Fail");
// }

// var PersonName = "Yogesh";

// switch (PersonName) {
//     case "Hello":
//         console.log("I am Hello");
//         break;
//     case "World":
//         console.log("I am World");
//         break;
//     case "Demo":
//         console.log("I am Demo");
//         break;
//     case "Data":
//             console.log("I am Data");
//         break;
//     default:
//         console.log("Nothing Here !!");
//         break;
// }

// var StudentNames = ["demo", "hello", "world", "stop", "data"];

// for (let i = 0; i <= StudentNames.length - 1; i++){

//     console.log(i);

//     if (StudentNames[i] === "world")
//     {
//         console.log(StudentNames[i]);
//         break;
//     }
// }


// var StudentMarks = [95, 80, 90, 96, 89];
// var SumOfGievnMarks = 0;
// var percentage = 0;

// for (let i = 0; i < StudentMarks.length; i++){
//     SumOfGievnMarks += StudentMarks[i];
// }

// percentage = (SumOfGievnMarks / 500) * 100;
// console.log(`Percentage = ${percentage}`);

// switch (true) {
//     case percentage >= 35 && percentage < 60:
//         console.log("D");
//         break;
//     case percentage >= 60 && percentage < 70:
//         console.log("C");
//         break;
//     case percentage >= 70 && percentage < 80:
//         console.log("B");
//         break;
//     case percentage >= 80 && percentage < 90:
//         console.log("A");
//         break;
//     case percentage >= 90:
//         console.log("A+");
//         break;
//     default:
//         console.log("Fail");
//         break;
// }

/*
  1] for in 

    let user = {name : "Web",
                age  : 20,
                address : pune
    }
*/

var user = { name: "Web", age: 20, address: "Pune" };

for (let Information in user){
    console.log(user[Information]);
 }

var x = [10, 20, 30, 40, 50];

for (let GetData in x) {
    console.log(x[GetData]);
}

// var StudentNames = "Hello";

// for (let UserData of StudentNames){
//     console.log(UserData);
// }


// ternary ?

// (condition)  ? TrueExpression : FalseExpression;

// const Marks = 80;
// let Statement = '';

// if (Marks > 70) {
    
//     Statement = 'Firts Class With Distinction.';
// } else {
//     Statement = 'First Class.';
// }

// console.log(Statement);

// // function Calculator(a, b, Operation) {
// //     if (Operation == "+") {
// //         return a + b;
// //     } else if (Operation == "*") {
// //         return a * b;
// //     } else if (Operation == "/") {
// //         return a / b;
// //     } else if (Operation == "-") {
// //         return a - b;
// //     } else {
// //         return 0;
// //     }
// // }
// // var Result = Calculator(5, 2, "*");
// // console.log(Result);

// function Calculator(a, b, Operation) {
//     if (Operation == "+") {
//         console.log(a + b);
//     } else if (Operation == "*") {
//         console.log(a * b);
//     } else if (Operation == "/") {
//         console.log(a / b);
//     } else if (Operation == "-") {
//         console.log(a - b);
//     } else {
//         console.log("Error");
//     }
// }

// //Calculator(5, 2, "*");
// var Result = Calculator(5, 2, "*");
// console.log(Result);

// function Display() {
    
// }

/*
    Function Types In JavaScript 

    1] Function Declaration / Function Defination / Function Statement 
    2] Function Expression / Anonymous (Without Name)
    3] Fat Arrow Function 

    * Callback function 
*/
 // 1. 

// function Sum(a, b) {
//     return a + b;
// }
// debugger;
// var result = Sum(10, 20);
// console.log(result);
// Sum(30, 15);
// Sum(75, 180);
// Sum(256, 40);

/*
function DisplaySum(GetArr) {
    let Sum = 0;

    for (let i = 0; i <= GetArr.length - 1; i++){
        Sum = Sum + GetArr[i];
    }
    var z = Avrage(Sum, GetArr.length)
    return z;
}

function Avrage(GetSum, GetElementLength) {
    return GetSum / GetElementLength;
}

var arr = [10, 20, 30, 40, 50];
var GetResultAvrage = DisplaySum(arr);
console.log(GetResultAvrage);
*/

// function DisplaySum(GetArr) {
//     let Sum = 0;

//     for (let i = 0; i <= GetArr.length - 1; i++){
//         Sum = Sum + GetArr[i];
//     }
//     var Avrag = Sum / GetArr.length;
//     return Avrag;
// }

// var arr = [10, 20, 30, 40, 50];
// var GetResultAvrage = DisplaySum(arr);
// console.log(GetResultAvrage);


// var Names = ["Red", "Blue", "Yellow", "green"];
// var Output = ChangeValue(Names);

// console.log(Output);

// function ChangeValue(GetNames) {
//     GetNames[1] = "Gray";
//     return GetNames;
// }

// var obj = { Name: "Hello", Age: 21, Address: "Karad" };
// var Result = Display(obj);
// console.log(Result);

// function Display(GetObj) {
//     GetObj.Name = "Yogesh";
//     return GetObj;
// }

// var x = 10;
// var GetResult = CheckValue(x);
// console.log(GetResult);

// function CheckValue(x) {
//     if (x % 2 == 0) {
//         return "Even";
//     }

//     if (x > 5) {
//         return "Your Number is greate than 5";
//     }
// }

// function CheckDiginCount(No) {
//     debugger;
//     var GivenNo = No;
//     var DigitCount = 0;

//     while (GivenNo != 0) {        
//         GivenNo = GivenNo / 10;
//         GivenNo = Math.floor(GivenNo);
//         DigitCount++;
//     }

//     return DigitCount;
// }

// let Num01 = 5864;
// var Result = CheckDiginCount(Num01);
// console.log(Result);


// var x = Math.round(123.4);
// console.log(x);
// x = Math.round(123.42);
// console.log(x);
// x = Math.round(123.423);
// console.log(x);
// x = Math.round(0.1234234);
// console.log(x);

// var y = Math.floor(123.4);
// console.log(y);
// y = Math.floor(123.42);
// console.log(y);
// y = Math.floor(123.423);
// console.log(y);
// y = Math.floor(0.1234234);
// console.log(y);

// var p = Math.trunc(123.4);
// console.log(p);
// p = Math.trunc(123.42);
// console.log(p);
// p = Math.trunc(123.423);
// console.log(p);
// p = Math.trunc(0.1234234);
// console.log(p);



// Function Expression / Anonymous Function 

// function Square(Num) {
//     return Num * Num;
// }

// var getResult = Square(16);
// console.log(getResult);

// var Square = function (Num) {
//     return Num * Num;
// };

// var getResult = Square(15);
// console.log(getResult);



// function Display(Fun, Arr) {
//     debugger
//     const GetNewArray = new Array(Arr.length);
   
//     for (let i = 0; i < Arr.length; i++){
//         GetNewArray[i] = Fun(Arr[i]);
//     }
//     return GetNewArray;
// }
 
// const GetCube = function (x) {
//     return x * x * x;
// };

// const Data = [2, 6, 5, 9, 13, 16, 25];
// const CubeResult = Display(GetCube, Data);
// console.log("Cube Result :", CubeResult);

// const PlaneArray = [10, 5, 26, 25, 4, 8];
// console.log(Math.sqrt(64));

//Square Root
//[2, 2, 2, 2, 3, 3]
// var Num = 1256;
// var Temp01 = Num;
// var Temp = [];
// let i = 2, j = 0;
// debugger;
// while (Num != 1) {
//     if (Num % i == 0) {
//         Num = Num / i;
//         Temp[j] = i;
//         j++;     
//     } else {
//         i++;
//     }
// }

// //Temp = [2, 2, 2, 2, 3, 3];
// debugger;
// var StoreDigit;
// var PreviousValue;
// var count = 0;
// var SquareRoot = 1;

// for (let a = 0; a < Temp.length; a++) {
//     StoreDigit = Temp[a];

//     if (Temp[a] != PreviousValue) {
//         count = 0;
//         for (let i = 0; i < Temp.length; i++) {
//             if (StoreDigit === Temp[i]) {
//                 count++;
//             }
//         }

//         console.log(`Count of ${Temp[a]} is : `, count);
        
//         for (let j = 1; j <= (count / 2); j++) {
//             SquareRoot = SquareRoot * Temp[a];
//         }
//     }   
//     PreviousValue = Temp[a];
// }
// console.log(`Square Root of ${Temp01} is `,SquareRoot);

// console.log(Math.sqrt(1256));

//console.log(Temp);
// const Square = function (GetArr) {
    
//     const Result = new Array(GetArr.length);

//     for (let i = 0; i < GetArr.length; i++){
//         Result[i] = GetArr[i] * GetArr[i];
//     }
//     return Result;
// }

// const arr01 = [2, 4, 6, 8, 10];
// var Result1 = Square(arr01);
// console.log("Square : ", Result1);


// const SquareRoot = function (GetArr) {
    
//     const Result = new Array(GetArr.length);

//     for (let i = 0; i < GetArr.length; i++){
//         Result[i] = Math.sqrt(GetArr[i]);
//     }
//     return Result;
// }

// const arr02 = [4, 9, 64];
// var Result2 = SquareRoot(arr02);
// console.log("Square Root : ", Result2);

// function parameter 

// 1.  Default  
// 2.  Rest Paramter 

// function Addition(a, b = 2) {
//     return a + b;
// }

// console.log(Addition(20));


// function login(...Args) {
//     let Sum = 0;

//     for (const Argument of Args) {
//         Sum += Argument;
//     }

//     return Sum;
// }

// var result = login(10, 20, 56, 256);
// console.log(result);  

// 3. Fat Arrow Function 


// 1.

// function Sum(a, b) {
//     return a + b;
// }

// console.log(Sum(10, 20));

// function Sum1() {
//     let a = 10;
//     let b = 20; 

//     return a + b;
// }
// console.log(Sum1());

// const sum = function () {
// }
// let a = 10;
// let b = 20;

// const sum = () => a + b;

// console.log(sum());


// var Table = 2;
// var TableResult01 = undefined;
// var TableResult02 = undefined;

// for (let i = 1, j = 10; i <= 10, j >= 1; i++, j--){
//     TableResult01 = Table * i;
//     TableResult02 = Table * j;
    
//     console.log(TableResult01," ",TableResult02);
//     console.log("\n");
// }

//  10 % 2 == 0

//console.log(Math.pow(4, 2));
//console.log(Math.sqrt(16));


//Square Root
//[2, 2, 2, 2, 3, 3]
// var Num = 144;
// var Temp01 = Num;
// var Temp = [];
// let i = 2, j = 0;
// debugger;
// while (Num != 1) {
//     if (Num % i == 0) {
//         Num = Num / i;
//         Temp[j] = i;
//         j++;     
//     } else {
//         i++;
//     }
// }

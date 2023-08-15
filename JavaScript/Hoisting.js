//var x = undefined;
// console.log(x);
// var x = 10;
// console.log(x)

// var y = undefined;

// console.log(y);
// var y = 2
// console.log(y);

// let x = undefined;

// console.log(x);
// let x = 10;


// console.log(Sum());

// function Sum() {
//     var a = 10;
//     var b = 20;

//     return a + b;
// }


// console.log(sum());

// var sum = () => {
//     var a = 10;
//     var b = 20;
//     return a + b;
// }

// synchronous
// asynchronous

// var x = 10;
// var y = 30;
// var z = 40;
// var a = 100;

//Callback

// 1.
/*
function Get(x) {
    console.log(x);
}

function Send(a, b) {
    let Sum = a + b;
    return Sum;
}

var Result = Send(5, 10);
Get(Result);
*/
// 2.
/*
function Get(x) {
    console.log(x);
}

function Send(a, b) {
    let Sum = a + b;
    Get(Sum);
}

Send(5, 10);
*/
// 3. Callback -
/*
function Get(x) {
    console.log(x);
}

function Send(a, b, YourFunction) {
    let sum = a + b;
    YourFunction(sum);
}

Send(5, 10, Get())

*/
//forEach()

// var Arr = [10, 20, 30, 40];

// Arr.forEach((CureentValue, index, arr) => {
//     console.log(CureentValue * 2, index, arr);
// });
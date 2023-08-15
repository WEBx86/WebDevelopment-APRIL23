// // var x = "Hello";
// // var y = [10, 20, 30, 40];

// // const Display = function MyData() {
    
// // };

// // const person = { Name: "Ram", age: 21, Address: "Karad" };

// // const MyFirstArray = [x, y, Display, person];  // Array literal
// // console.log(MyFirstArray);

// // console.log(typeof (MyFirstArray));

// // const arr01 = [10, 20, 30, 40, 50];
// // console.log(arr01.length);
// // console.log(arr01[4]);
// // console.log(arr01[arr01.length - 1]);

// // arr01[arr01.length] = 60;
// // console.log(arr01);


// // const arr02 = [];
// // arr02[0] = "Hello";
// // arr02[1] = "World";
// // arr02[2] = "Demo";

// // console.log(arr02);

// // const person = [];
// // person["firstName"] = "John";
// // person["lastName"] = "Doe";
// // person["age"] = 46;

// // console.log(person.length);
// // console.log(person[0]);


// // const person = { Name: "Ram", age: 21, Address: "Karad" };

// // const Shop = [];

// // Shop["ElectronicMaterial"] = "Laptop";

// // console.log(Shop["ElectronicMaterial"]);


// // const arr01 = [10, 20, 30, 80, 40, 50];

// // console.log(arr01.toString());

// //const StudentNames = new Array(10);
// //const StudentInformation = [10];

// //console.log(StudentNames.length);
// //console.log(StudentInformation.length);

// //console.log(StudentNames.toString());
// //console.log(StudentInformation[0]);

// // var x = Array.isArray(StudentNames);
// // console.log(x);

// const ElectronicMaterials =
//     [   "Laptop",
//         "Mobile",
//         "Remote",
//         "Charger",
//         "Headphones",
//         "Mouse"
//     ];

// console.log(ElectronicMaterials.toString());
// let SaperateArray = ElectronicMaterials.join("-");
// console.log(SaperateArray);

// ElectronicMaterials.pop();

// console.log(ElectronicMaterials);

// ElectronicMaterials.push("Keyboard");

// console.log(ElectronicMaterials);

// ElectronicMaterials.shift();

// console.log(ElectronicMaterials);

// ElectronicMaterials.unshift("CPU");

// console.log(ElectronicMaterials);

// Slice
// const ElectronicMaterials =
//     [   "Laptop",
//         "Mobile",
//         "Remote",
//         "Charger",
//         "Headphones",
//         "Mouse"
//     ];

// slice(start, End);

//console.log(ElectronicMaterials.slice(-2, 4));
// ElectronicMaterials.slice(2, 4);
// ElectronicMaterials.slice(4, 4);

//console.log(ElectronicMaterials.length);

//console.log(-2 + 6); // 4

//slice(start, End);
//const Num = [10, 20, 30, 40, 50];

//console.log(Num.slice(1, 9)); // -3 + 5 = 2

//splice(start, DeleteCount, ReplaceValues)
// const Materials =
//     [   "Laptop",
//         "Mobile",
//         "Remote",
//         "Charger",
//         "Headphones",
//         "Mouse"
//     ];
// Materials.splice(2, 1, "CPU");

// console.log(Materials);
   
const Num01 = ["Hello", "World"];
const Num02 = ["Web", "Development"];
const Num03 = [10, 20, 30, 40, 50];

const Result = Num01.concat(Num02,Num03);

console.log(Result);



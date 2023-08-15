// setTimeOut

// setTimeout(function () {
//     fun("Welcome WEBx86");
// }, 4000);

// function fun(GetData) {
//     console.log(GetData);
// }

// setInterval(function DigitalWatch() {
//     var x = new Date();
//     console.log(
//         x.getHours() + " : " +
//         x.getMinutes() + " : " +
//         x.getSeconds() + " : " +
//         x.getMilliseconds()
//     );
// }, 1000);

// Database
const StudentInformation = [
    {name: "Demo01", Age: 21, Address: "Karad"},
    {name: "Demo02", Age: 22, Address: "Satara"},
    {name: "Demo03", Age: 23, Address: "Pune"},
    {name: "Demo04", Age: 24, Address: "Mumbai"}
];

//Insert Data
function AddNewStudent(GetInfo) {
    setTimeout(() => {
        StudentInformation.push(GetInfo);       
        console.log("Student Added Successfully !!!");
        DisplayStudent();
        //DeleteStudent("Demo03");
    }, 3000);
}

//Select or Display Data
function DisplayStudent() {
    setTimeout(() => {
        var Temp = "";

        StudentInformation.forEach((element) => {
            Temp += element.name + " " + element.Address + " " + element.Age + "\n";
        });
        console.log(Temp);
    }, 1000);
}

// User Enter information 
let EnterNewInformation = { name: "Demo 05", Age: 25, Address: "Sangli" };
AddNewStudent(EnterNewInformation);

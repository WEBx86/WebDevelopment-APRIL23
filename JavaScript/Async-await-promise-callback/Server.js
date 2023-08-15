// Database
const StudentInformation = [
    {name: "Demo01", Age: 21, Address: "Karad"},
    {name: "Demo02", Age: 22, Address: "Satara"},
    {name: "Demo03", Age: 23, Address: "Pune"},
    {name: "Demo04", Age: 24, Address: "Mumbai"}
];

//Select or Display Data
var DisplayStudent = () =>{
    setTimeout(() => {
        var Temp = "";

        StudentInformation.forEach((element, index) => {
            //Temp += element.name + " " + element.Address + " " + element.Age + "\n";
            Temp += `<li>${element.name + " " + element.Address + " " + element.Age}</li>`;
        });

        document.body.innerHTML = Temp;
       //console.log(Temp);       
    }, 1000);
}

//Insert Data / Create Data
function AddNewStudent(GetInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            StudentInformation.push(GetInfo);  
            let error = false;
            if (!error) {
                console.log(alert("Student Added Successfully !!!"));
                resolve();
            } else {
                reject("Student Not Added Successfully.");
            }   
        }, 3000);
    });
}

//Display Information
//DisplayStudent();

// User Enter information
/*9
let EnterNewInformation = { name: "Demo 05", Age: 25, Address: "Sangli" };
AddNewStudent(EnterNewInformation).then(DisplayStudent).catch(err => console.log(alert(err)));
*/

var Resutlt = async () => {
    let EnterNewInformation = { name: "Demo 05", Age: 25, Address: "Sangli" };
    await AddNewStudent(EnterNewInformation);
    DisplayStudent();
}

Resutlt();
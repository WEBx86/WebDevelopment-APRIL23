import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
//   MyName = 50

//   PersonalDetails = ["Jayram Patil", "WEBx86 Infotech", "Pune", "7972906088"]

//   CityNames = ["Karad", "Pune", "Mumbai", "Sangli", "Satara", "Nashik", "Nagpur"]

//   ImageName = "WEBx86";


// if(ImageName == 'WEBx86') {
//    imgPath = "../../../assets/DRD-1.PNG"
// } else {
//    imgPath = "../../../assets/WEBx86.png"
// }

//   AngularStyle = "color: blue;"

//   DemoFunction() {
//     alert("Hello");
//   }
  detailsObj = this.getPersonalDetails();


  getPersonalDetails() {
    let MyDetails: PersonalDetails
    MyDetails = {
      FirstName : "Jayram",
      LastName : "Patil",
      Age: 23,
      Address: "Pune"
    }
    let YogeshDetails: PersonalDetails
    YogeshDetails = {
      FirstName : "Yogesh",
      LastName : "Sawant",
      Age : 23
    }
    return MyDetails;
  }

}

interface PersonalDetails{
  FirstName: string,
  LastName: string,
  Age: number,
  Address?: string
}

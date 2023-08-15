// var str = "Hello World";
// var str02 = 'Web Development';

// console.log(str.length);
// console.log(str02.length);
 
// var Result = str +" "+ str02;
// console.log(Result);

// var Result2 = str.concat(" ",str02);
// console.log(Result2);

// slice(start, End);
// substring()
// substr()

// let NewStr = "Hello, World, Web, Development";
// console.log(NewStr.length);
// let NewResult = NewStr.slice(-2, 25);
// // NewStr.slice(28, 25)

// if (NewResult == "") {
//     console.log("Empty");
// } else {
//     console.log(NewResult);
// }


// var x = "We lead others follow...";
// var output = x.replace("lead", "Show");

// console.log(x.toUpperCase());
// console.log(x.toLowerCase());

// var y = "     Hello     ";
// console.log(y.length);
// console.log(y);
// var Output =  y.trim();
// console.log(Output);

// const Obj = { Name: "Yogesh", Age: 21, Address: "Karad" };
// JSON

// var CustomerName = '{"AllCustomers":[{"Name": "Yogesh","Age":"21"}]}';
// var Output = JSON.parse(CustomerName);

// console.log(Output.AllCustomers[0].Name);

// Create AashayWeather object using JSON string
var AashayWeather = `{"Soil":[{"Density": "50khp", "Humidity":"253.55", "wind":"356.56"}],
                      "Water":[{"Rainy": "25.25", "Cold":"856.522", "Hot":"2565.55"},
                       {"WindSpeed":"220456"}]
                    }`;

var Result = JSON.parse(AashayWeather);  // JSON String Convert to Object 
console.log(Result.Soil[0]);













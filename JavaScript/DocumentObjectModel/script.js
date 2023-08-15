 // var x = document.querySelectorAll("section>p");
        // var Output = "";
        // for(let i = 0; i < x.length; i++){
        //     Output += x[i].innerHTML + "\n";
        // }
        // alert(Output);

document.body.style.margin = "0px";

var NewHeaderElement = document.createElement("header");
var CreateNode = document.createTextNode("WEBx86 Infotech");
NewHeaderElement.appendChild(CreateNode);

NewHeaderElement.setAttribute("style",     
  `padding:40px;
  text-align:center;
  background-color:navy;
  font-size:25px;
  color:white`  
)

document.body.appendChild(NewHeaderElement);

console.log(NewHeaderElement);

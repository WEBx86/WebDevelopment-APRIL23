debugger
var StudentName = "Hello JavaScript";
function sun() {
    console.log("Inside the sun() Function.");
    gun();
    console.log("End The sun() function.");
}

function gun() {
    console.log("Inside the gun() Function.");
    fun();
    console.log("End The gun() function.");

    var a = 10;
}

function fun() {
    console.log("Inside the fun() Function.");
    console.log("End The fun() function.");
}

sun();
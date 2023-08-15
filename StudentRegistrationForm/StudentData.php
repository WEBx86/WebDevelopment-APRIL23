<?php
 $servername = "127.0.0.1"
 $username = ""
 $pass = ""
 $DatabaseName = "studentregistration"

 $conn = new mysqli($servername,$username,$pass, $DatabaseName);

 if($conn->connect_error){
    die("Not Connected: ".$conn->connect_error)
 }

 $FullName = $_GET["FullName"];
 $MobileNumber = $_GET["MobNo"];
 $Email = $_GET["email"];


 $query = "Insert into studentdata(FullName,Mobile,email) values($FullName, $MobileNumber,$Email)";

 if($conn->$query($sql) == TRUE){
    echo "Record Save Successfull";
 }else{
    echo "Record Not Save Successfull". $query;
 }

 $conn->close();
?>
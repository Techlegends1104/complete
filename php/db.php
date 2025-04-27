<?php 
    $host = "localhost" ; 
    $user = "root" ; 
    $pass = "" ; 
    $db = "library" ; 
    $conn = new mysqli($host,$user,$pass,$db);

    if (mysqli_connect_errno()) {
        die("connection error". mysqli_connect_error());
    }
?>
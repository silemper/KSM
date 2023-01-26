<?php 
define('DB_HOST', 'localhost'); 
define('DB_USERNAME', 'root'); 
define('DB_PASSWORD', ''); 
define('DB_NAME', 'pharm');

// date_default_timezone_set('Asia/Karachi');

// Connect with the database 
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME); 
 
// Display error if failed to connect 
if ($conn->connect_errno) { 
    echo "Connection to database is failed: ".$conn->connect_error;
    exit();
}

// $mysqli -> close();
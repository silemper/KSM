<?php
require 'config.php';

$des = $_GET['des'];
$qu = $_GET['qu'];
$up = $_GET['up'];
$st = $_GET['st'];

$sql = "INSERT INTO sales(description,quantity,unitprice,subtotal)  
	VALUES('".$des."','".$qu."','".$up."','".$st."')";

if($conn->query($sql) === FALSE)
	{ echo "Error: " . $sql . "<br>" . $conn->error; }

echo "<br>";
echo $conn->insert_id;

$conn -> close();

// http://127.0.0.1/pos/pharm1.0.2/salesinsert.php?des=product1&qu=1&up=100&st=100
<?php
require 'db_conn.php';
 


// (C) SEARCH
$stmt = $pdo->prepare("SELECT * FROM `products` WHERE `productid` LIKE ? OR `productname` LIKE ?");
$stmt->execute(["%".$_POST["search"]."%", "%".$_POST["search"]."%"]);
$results = $stmt->fetchAll();
if (isset($_POST["ajax"])) { echo json_encode($results); }
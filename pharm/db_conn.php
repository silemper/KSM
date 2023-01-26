<?php
// (A) DATABASE CONFIG - CHANGE TO YOUR OWN!
define("DB_HOST", "localhost");
define("DB_NAME", "pharm");
define("DB_CHARSET", "utf8");
define("DB_USER", "root");
define("DB_PASSWORD", "");
 
$pdo = new PDO(
  "mysql:host=".DB_HOST.";charset=".DB_CHARSET.";dbname=".DB_NAME,
  DB_USER, DB_PASSWORD, [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
<?php
// Database configuration
$dbHost = "sql311.byethost15.com";
$dbUsername = "b15_18203369";
$dbPassword = "dmitrii7245";
$dbName = "b15_18203369_codex";

// Create database connection
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>
<?php
include("conn.php");
session_start();
$DrugStoreID=$_SESSION['id'];
$newpw=$_POST['newpw'];
$setsql="update DrugStoreInfo set DrugStorePassword = '$newpw' WHERE  DrugStoreID='$DrugStoreID'";
$result=$pdo->exec($setsql);
echo $result;
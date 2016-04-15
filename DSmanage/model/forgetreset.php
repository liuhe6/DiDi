<?php
include("conn.php");
$LoginName=$_POST['LoginName'];
$newpw=$_POST['newpw'];
$setsql="update DrugStoreInfo set DrugStorePassword = '$newpw' WHERE  LoginName='$LoginName'";
$result=$pdo->exec($setsql);
echo $result;
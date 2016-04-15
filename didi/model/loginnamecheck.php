<?php
include('conn.php');
$loginname=$_POST['LoginName'];
$sql="select COUNT(DrugStoreID) from DrugStoreInfo where LoginName='$loginname'";
$result=$pdo->query($sql)->fetch();
echo $result[0];
<?php
include('conn.php');
$loginname=$_POST['LoginName'];
$sql="select COUNT(DrugStoreID) from DrugStoreInfo where LoginName='$loginname' and (DrugStoreStatus=1 OR DrugStoreStatus=0)";
$result=$pdo->query($sql)->fetch();
echo $result[0];
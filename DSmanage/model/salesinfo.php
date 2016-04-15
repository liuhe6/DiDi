<?php
include("conn.php");
include_once("../config.php");
include("tokencheck.php");

$DrugStoreID=$_SESSION['id'];
$DSname=$_SESSION['DSname'];
$markettitle= $_POST['markettitle'];
$startdate=$_POST['startdate'];
$enddate=$_POST['enddate'];
$marketinfo=$_POST['marketinfo']."开始日期：".$startdate."结束日期：".$enddate;
$path=$_POST['path'];
$time=date('Y-m-d h:i:s');
$sql="insert into StoreMarketInfo VALUES('$DrugStoreID','$markettitle','$marketinfo','$path','$startdate','$time',2,0)";
    $result = $pdo->exec($sql);
    if($result == 1){
        echo '1';
    }

else{
    echo '0';
}
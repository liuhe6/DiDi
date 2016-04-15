<?php
include("conn.php");
session_start();
$DrugStoreID=$_SESSION['id'];
$answer=$_POST['answer'];
$answersql="select * from DrugStoreInfo where DrugStoreID='$DrugStoreID' and PasswordAnswer='$answer'";
$result=$pdo->query($answersql)->fetchall();
$num=count($result);
if ($num==1){
    echo 1;
}
else{
    echo 0;
}

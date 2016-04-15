<?php
include("conn.php");

$LoginName=$_POST['LoginName'];
$answer=$_POST['answer'];
$answersql="select * from DrugStoreInfo where LoginName='$LoginName' and PasswordAnswer='$answer'";
$result=$pdo->query($answersql)->fetchall();
$num=count($result);
if ($num==1){
    echo 1;
}
else{
    echo 0;
}

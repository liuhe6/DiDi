<?php
include("conn.php");
$loginname=$_POST['LoginName'];
$question="";
$questionsql="select PasswordQuestion from DrugStoreInfo where LoginName='$loginname'";
$result=$pdo->query($questionsql)->fetch();
$question=$result['PasswordQuestion'];
echo $question;
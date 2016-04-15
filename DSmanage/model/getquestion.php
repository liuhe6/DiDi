<?php
include("conn.php");
include("tokencheck.php");

$DrugStoreID=$_SESSION['id'];
$question="";
$questionsql="select PasswordQuestion from DrugStoreInfo where DrugStoreID='$DrugStoreID'";
$result=$pdo->query($questionsql)->fetch();
$question=$result['PasswordQuestion'];
echo $question;
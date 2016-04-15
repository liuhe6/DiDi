<?php
include("conn.php");
session_start();
$tokensql="select count(*) from TokenLog WHERE Token='".$_SESSION['token']."'";
$result=$pdo->query($tokensql)->fetch();
if($result[0]==0){
    exit("2");
}
if($result[0]==1){
    $time=date("Y-m-d H:i:s");
    $updatesql="update TokenLog set LastAccessTime='$time' WHERE  Token='".$_SESSION['token']."'";
    $updateresult=$pdo->exec($updatesql);
}
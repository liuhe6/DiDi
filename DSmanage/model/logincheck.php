<?php
session_start();
$DSname=$_POST["dsname"];
$DSpwd=$_POST["dspwd"];
include("conn.php");
 $query="select DrugStoreName,DrugStoreID from DrugStoreInfo WHERE LoginName='$DSname' AND DrugStorePassword='$DSpwd'";
  $result=$pdo->query($query);
  $row=$result->fetchAll(PDO::FETCH_NUM);
  $num=count($row);
  echo $num;

if ($num == 1){
    $_SESSION['id']=$row['0']['1'];
    $_SESSION['DSname']=$row['0']['0'];
    $token=md5(uniqid());
    $time=date("Y-m-d H:i:s");
    $_SESSION['token']=$token;
    $sqllocate="select Longitude,Latitude from DrugStoreInfo WHERE DrugStoreID='". $_SESSION['id']."'";
    $locateresult=$pdo->query($sqllocate)->fetchAll();
    $Longitude=$locateresult[0][0];
    $Latitude=$locateresult[0][1];

    $existsql="select count(Token) from TokenLog WHERE userid='". $_SESSION['id']."' and UserType=1";
    $existresult=$pdo->query($existsql)->fetch();
    $existnum=$existresult[0];

    if($existnum == 1){

        $deletesql="delete from TokenLog WHERE UserID='". $_SESSION['id']."'and UserType=1";
        $insertsql2="insert into TokenLog VALUES ('$token','". $_SESSION['id']."','1','$time','$time',' $Longitude','$Latitude')";
        $updateresult=$pdo->exec($deletesql);
        $updateresult.=$pdo->exec($insertsql2);
    }
    if($existnum == 0){
        $insertsql="insert into TokenLog VALUES ('$token','". $_SESSION['id']."','1','$time','$time',' $Longitude','$Latitude')";
        $insertresult=$pdo->exec($insertsql);
    }
}

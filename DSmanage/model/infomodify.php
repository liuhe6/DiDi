<?php
include("conn.php");
include("tokencheck.php");
$contactname=$_POST["contactname"];
$phone=$_POST["phone"];
$mobilephone=$_POST["mobilephone"];
$drugstoreshow=$_POST["drugstoreshow"];
$email=$_POST["email"];
$starthour=$_POST["starthour"];
$endhour=$_POST["endhour"];
$id=$_SESSION['id'];
$updatesql="update DrugStoreInfo set ContactName = '".$contactname."',
             Phone = $phone,
            MobilePhone = $mobilephone,
           DrugStoreShow = '".$drugstoreshow."' ,
             Email = '".$email."' ,
             StartHour = $starthour,
             EndHour = $endhour where DrugStoreID = '$id'";
$result=$pdo->exec($updatesql);
echo $result;

/*if($result){
    echo "<script type='text/javascript'>alert('修改成功');</script>";
}else{
    echo "<script type='text/javascript'>alert('修改失败');</script>";
}*/

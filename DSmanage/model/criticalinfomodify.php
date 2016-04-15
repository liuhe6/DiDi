<?php
include("conn.php");
include("tokencheck.php");

$DrugStoreID=$_SESSION['id'];
$DSname=$_SESSION['DSname'];
$drugstorename=$_POST['drugstorename'];
$drugstoreaddress=$_POST['drugstoreaddress'];
$zipcode=$_POST['zipcode'];
$nightsend=$_POST['nightsend'];
$company=$_POST['company'];
$BusinessLicensep=$_POST['BusinessLicensep'];
$TaxRegistrationp=$_POST['TaxRegistrationp'];
$DrugLicensep=$_POST['DrugLicensep'];
$OrganizationCodep=$_POST['OrganizationCodep'];
$GspCertificationp=$_POST['GspCertificationp'];
$EquipmentLicensep=$_POST['EquipmentLicensep'];
$FoodHygieneLicensep=$_POST['FoodHygieneLicensep'];
$PharmacistCardp=$_POST['PharmacistCardp'];

$url="http://api.map.baidu.com/geocoder/v2/?address=$drugstoreaddress&output=json&ak=U8AbPH43UWCErowxIRUyzRXe";
$json=file_get_contents($url);
$de_json = json_decode($json,TRUE);
if ($de_json['status']== '0'){
    $Longitude=$de_json['result']['location']['lng'];
    $Latitude=$de_json['result']['location']['lat'];
}
else{
    exit('上传失败,请输入有效地址');
}


$sql="insert into DrugStoreInfoApply VALUES ('$DrugStoreID','$drugstorename','$drugstoreaddress','$zipcode','$Longitude',
'$Latitude','$BusinessLicensep','$TaxRegistrationp','$OrganizationCodep','$DrugLicensep','$GspCertificationp','$EquipmentLicensep','$FoodHygieneLicensep','$PharmacistCardp',2,'1900-1-1','null','0')";
$result=$pdo->exec($sql);
if($result == 1){
    echo 1;
}
else{
    echo ("数据上传失败");
    //print_r($pdo->errorInfo());
}
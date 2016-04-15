<?php
include('conn.php');

$LoginName=$_POST['LoginName'];
$DrugStorePassword=$_POST['DrugStorePassword'];
$PasswordQuestion=$_POST['PasswordQuestion'];
$PasswordAnswer=$_POST['PasswordAnswer'];
$DrugStoreName=$_POST['DrugStoreName'];
$DrugStoreShow=$_POST['DrugStoreShow'];
$ContactName=$_POST['ContactName'];
$Phone=$_POST['Phone'];
$MobilePhone=$_POST['MobilePhone'];
$Email=$_POST['Email'];
$address=$_POST['address'];
$ZipCode=$_POST['ZipCode'];
$StartHour=$_POST['StartHour'];
$EndHour=$_POST['EndHour'];
$nightsend=$_POST['nightsend'];
$CooperTime=$_POST['CooperTime'];
$Cooperdate=date("Y-m-d H:i:s",strtotime("+$CooperTime years"));
$StrategicPartner=$_POST['StrategicPartner'];


$BusinessLicensep=$_POST['BusinessLicensep'];
$TaxRegistrationp=$_POST['TaxRegistrationp'];
$DrugLicensep=$_POST['DrugLicensep'];
$OrganizationCodep=$_POST['OrganizationCodep'];
$GspCertificationp=$_POST['GspCertificationp'];
$EquipmentLicensep=$_POST['EquipmentLicensep'];
$FoodHygieneLicensep=$_POST['FoodHygieneLicensep'];
$PharmacistCardp=$_POST['PharmacistCardp'];

$url="http://api.map.baidu.com/geocoder/v2/?address=$address&output=json&ak=U8AbPH43UWCErowxIRUyzRXe";
$json=file_get_contents($url);
$de_json = json_decode($json,TRUE);
if ($de_json['status']== '0'){
    $Longitude=$de_json['result']['location']['lng'];
    $Latitude=$de_json['result']['location']['lat'];
}
else{
    exit('上传失败,请输入有效地址');
}
$time=date("Y-m-d H:i:s");

$sql="insert into DrugStoreInfo VALUES ('$DrugStoreName','$DrugStoreShow','$DrugStorePassword',
'$PasswordQuestion','$PasswordAnswer','$address','$ZipCode','$Email',
'$Longitude','$Latitude','$Phone','$MobilePhone','$ContactName','$StartHour',
'$EndHour','$BusinessLicensep','$TaxRegistrationp','$OrganizationCodep',
'$DrugLicensep','$GspCertificationp','$EquipmentLicensep','$FoodHygieneLicensep',
'$PharmacistCardp','100','2','$time','$time','$Cooperdate','1','$LoginName','$nightsend','$StrategicPartner','1','')";
$result=$pdo->exec($sql);
if($result == 1){
    echo 1;
}
else{
    echo ("数据上传失败");
    print_r($pdo->errorInfo());
    echo $sql;
}
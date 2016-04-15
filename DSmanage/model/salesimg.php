<?php
session_start();
$DSid=$_SESSION['id'];
include_once("../config.php");
$tmp_name=$_FILES["salesimg"]["tmp_name"];
$name=$_FILES["salesimg"]["name"];
$type=substr($name, strrpos($name, '.')+1);

$path=imgpath."saleimg/"."$DSid"."salesimg".date('YmdHis').".".$type;
move_uploaded_file($tmp_name,$path);
echo $path;
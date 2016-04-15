<?php
session_start();
include_once('../config.php');
$DrugStoreID=$_SESSION['id'];

$filename=$_POST['filename'];
$tmp_name=$_FILES["$filename"]["tmp_name"];
$path=imgpath."qualification/".$DrugStoreID.$filename.date('YmdHis')."."."jpg";
move_uploaded_file($tmp_name,$path);
echo $path;
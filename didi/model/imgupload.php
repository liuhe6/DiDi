<?php
include_once("../config.php");
$filename=$_POST['filename'];
$tmp_name=$_FILES["$filename"]["tmp_name"];
$path=imgpath."qualification/".rand(100,999).$filename.date('YmdHis')."."."jpg";
move_uploaded_file($tmp_name,$path);
echo $path;
//echo $path;

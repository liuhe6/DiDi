<?php
include("conn.php");
include("tokencheck.php");
$content=$_POST["content"];
$time=date("Y-m-d H:i:s");
$sql="insert into ChatRecord (ChatRoomID,UserID,ChatTime,ChatDetail) VALUES (1,1,'".$time."','".$content."')";
$result=$pdo->exec($sql);
$arr['res']=$result;
$arr['infotime']=$time;
echo json_encode($arr);

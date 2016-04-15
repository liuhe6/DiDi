<?php
include("conn.php");
session_start();

$listsql="select u.ChatRoomID,ChatRoomName from ChatUser u JOIN ChatRoom r on u.ChatRoomID=r.ChatRoomID WHERE UserID=1 and UserClass=1";
$listresult=$pdo->query($listsql);
foreach($listresult as $row){
    $arr['list'][ ]=array('ChatRoomID'=>$row['ChatRoomID'],
        'ChatRoomName'=>$row['ChatRoomName']);
}

$listresult2=$pdo->query($listsql);
$num=count($listresult2->fetchAll());
$arr['cnum']=$num;
echo json_encode($arr);


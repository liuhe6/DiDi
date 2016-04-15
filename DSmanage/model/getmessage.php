<?php
include("conn.php");
session_start();
$infotime=$_POST['infotime'];
if($infotime==''){
$sql="select ChatTime,UserID,ChatDetail from ChatRecord where ChatRoomID=1";
$result=$pdo->query($sql);
foreach($result as $row){
    echo "<p>".$row['ChatTime']."</p>". $row['UserID']."说:". $row['ChatDetail']. "<hr/>";
}
}
else{
    $sql2="select ChatTime,UserID,ChatDetail from ChatRecord where ChatRoomID=1 and ChatTime>'$infotime'";
    $res=$pdo->query($sql2)->fetchAll();
    $rowCount = count($res);
    if($rowCount != 0){
       foreach($res as $row){
        echo "<p>".$row['ChatTime']."</p>";
        echo $row['UserID']."说:";
        echo $row['ChatDetail'];
        echo "<hr/>";
    }
    }
    else {echo "";}
}

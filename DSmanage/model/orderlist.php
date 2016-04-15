<?php
include("conn.php");
session_start();
$Drugstoreid='lh';//$_SESSION['id'];

$page =intval($_POST['pageIndex']); //页数
$totalsql="select COUNT(*) from OrderInfo where DrugstoreID=1";
$total=$pdo->query($totalsql)->fetchColumn(); //查询共有多少条记录
$pagesize= $_POST['items_per_page'];   //获取每页的条目数
$totalpage = ceil($total/$pagesize);  //获取一共有多少页
$startpage = ($page)*$pagesize;

$arr['total'] = $total;
$arr['epagesiz'] = $pagesize;
$arr['totalpage'] = $totalpage;
$datasql="";
if($total <=  $pagesize){
    $datasql.="select * from OrderInfo where DrugstoreID=1";
}
else {
    $datasql.="select top $pagesize * from OrderInfo where OrderID not in (select top $startpage OrderID from OrderInfo where DrugstoreID=1)";
}
$data=$pdo->query($datasql);
foreach($data as $row) {
    $arr['list'][]=array('time' => $row['OrderTime'],
                         'detail' => $row['OrderDetail'],
                         'status' => $row['OrderStatus'],
                        'oid' =>$row['OrderID']);
}
echo json_encode($arr);
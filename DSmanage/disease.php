<?php
include("model/conn.php");
$page =intval($_POST['pageIndex']); //页数
$totalsql="select COUNT(*) from disease";
$total=$pdo->query($totalsql)->fetchColumn(); //查询共有多少条记录
$pagesize= $_POST['items_per_page'];   //获取每页的条目数
$totalpage = ceil($total/$pagesize);  //获取一共有多少页

$startpage = ($page)*$pagesize;
$arr['total'] = $total;
$arr['pagesize'] = $pagesize;
$arr['totalpage'] = $totalpage;
$arr['startpage'] = $startpage;
$datasql="select top $pagesize * from Disease where Diseaseid not in (select top $startpage DiseaseID from Disease)";
$data=$pdo->query($datasql);
foreach($data as $row) {
    $arr['list'][]=array('id' => $row['DiseaseID'],
                        'name' => $row['Disease']);

}
echo json_encode($arr);

<?php   //本段代码用于插入数据，删除
include("conn.php");
/*$del="delete from disease";
$dr=$pdo->exec($del);*/
for($i=0;$i<100;$i++)
{
    $sql="insert into disease (disease) VALUES ($i)";
    echo $sql.'<br/>';
    $result=$pdo->exec($sql);
}
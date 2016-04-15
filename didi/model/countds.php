<?php
include('conn.php');
$sql='select count(*) from DrugStoreInfo';
$resutl=$pdo->query($sql)->fetch();
echo $resutl[0];
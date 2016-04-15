<?php
$dbName='DidiMedicine';
$host='localhost';
$dbuser='sa';
$dbpwd='524112';
$dsn='sqlsrv:Server='.$host.';Database='.$dbName;
try{
    $pdo = new PDO($dsn,$dbuser,$dbpwd);
}catch (PDOException $e){
    die ("error!:" . $e->getMessage()."<br>" );
}
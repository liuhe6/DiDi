<?php
$dbName='DidiMedicine';
$host='HONG-PC';
$dbuser='sa';
$dbpwd='sa';
$dsn='sqlsrv:Server='.$host.';Database='.$dbName;
try{
    $pdo = new PDO($dsn,$dbuser,$dbpwd);
}catch (PDOException $e){
    die ("error!:" . $e->getMessage()."<br>" );
}
<?php
session_start();
$code = trim($_POST['code']);
if($code==$_SESSION["vcode"]) {
    echo '1';
}
else{
    echo '0';
}
<?php
session_start();
if(!isset($_SESSION['token'])){
    echo 0;
}
else{
    echo $_SESSION['token'];
}
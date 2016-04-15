<?php
$coopertime=3;
$cooperdate=date("Y-m-d H:i:s",strtotime("+$coopertime years"));
echo $cooperdate;
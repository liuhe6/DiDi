<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <link rel="stylesheet" href="CSS/non-responsive.min.css"/>
    <link rel="stylesheet" href="CSS/index.css"/>
    <link rel="stylesheet" href="CSS/pagination.css"/>
    <title></title>
    <script type="text/javascript" src="Js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="Js/jquery.pagination.js"></script>
    <script type="text/javascript" src="Js/bootstrap.min.js"></script>
    <script type="text/javascript" src="Js/Drugstoreindex.js"></script>
    <?php
    session_start();
    if(!isset($_SESSION['token'])){
        echo " <script>window.location='Drugstorelogin.php' </script>";
    }
    ?>
</head>
<body style="background-color: #e7e8eb;">
    <div class="toptop"></div>
    <div class="header">
        <div class="inheader">
            <div class="row">
            <div class="title col-xs-9">
                <div class="col-xs-3 "> <img src="img/logo.jpg" alt="" style="height: 45px;"/></div>
                <div class="col-xs-9"><p >药店管理平台</p></div>
            </div>
            <div class="col-xs-2" style="margin-top: 15px;text-align: right">欢迎：<a class="black" href="">
                    <?php echo $_SESSION['DSname'];?></a></div>
            <div class="col-xs-1" style="margin-top: 15px"><a class="black" href="Drugstorelogout.php">退出</a></div>
            </div>
        </div>
    </div>
    <div style="height: 30px"></div>

    <div class="body">
        <div class="navi">
            <div class="container">
                <ul id="mynavi" class="nav nav-pills nav-stacked" style="margin-top: 30px;" role="tablist">
                    <li id="loot" role="presentation" class="active" style="width: 15%"><a class="listitem" href="#">抢单</a></li>
                    <br>
                    <li id="Orderlist" role="presentation"  style="width: 15%"><a class="listitem" href="#">抢单记录</a></li>
                    <br>
                    <li id="InfoModify" role="presentation"  style="width: 15%"><a class="listitem" href="#">基本信息修改</a></li>
                    <br>
                    <li id="CritiacalInfo" role="presentation"  style="width: 15%"><a class="listitem" href="#">关键信息修改</a></li>
                    <br>
                    <li id="SalesInfo" role="presentation"  style="width: 15%"><a class="listitem" href="#">促销活动</a></li>
                    <br>
                    <li id="Pwreset" role="presentation"  style="width: 15%"><a class="listitem" href="#">重置密码</a></li>
                    <br>
                    <li id="ChatRoom" role="presentation"  style="width: 15%"><a class="listitem" href="#">聊天室</a></li>
                </ul>
            </div>
        </div>
        <div id="content" class="page"></div>
    </div>
</body>
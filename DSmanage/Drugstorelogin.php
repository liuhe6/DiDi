<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>嘀嘀送药药店管理平台</title>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <link rel="stylesheet" href="CSS/non-responsive.min.css"/>
    <link rel="stylesheet" href="CSS/login.css">
    <script type="text/javascript" src="Js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="Js/login.js"></script>

    <?php session_start();?>
</head>
<body>
    <div class="header">嘀嘀送药药店管理平台</div>
    <div class="body">
        <div class="img"><img src="img/logo.jpg" alt=""/></div>
        <div class="loginwindow">
            <div class="form-horizontal">
                    <div class="form-group" style="margin-top: 30px">
                        <label class="col-sm-3 control-label">用户名:</label>
                        <div class="col-sm-9"><input id="user_name" type="text"  placeholder="请输入药店登录用户名" class="input"/></div>
                    </div>

                     <div class="form-group" >
                        <label class="col-sm-3 control-label" >密码:</label>
                        <div class="col-sm-9">
                        <input id="user_passwd" type="password" placeholder="请输入对应药店登录密码" class="input"/>
                        <a href="pwforget.html">忘记密码？</a>
                        </div>
                    </div>

                    <div  class="form-group">
                        <label class="col-sm-3 control-label">验证码:</label>
                        <div class="col-sm-6"><input id="code" type="text" style="width: 100px" class="input"/></div>
                        <div class="col-sm-3 col-sm-pull-2"><img id='codep' src="model/code_num.php" alt="验证"/></div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-3 col-sm-offset-3">
                            <button id="login" type="button" class="btn btn-default">登陆</button>
                        </div>
                        <div class="col-sm-3" >
                            <button  class="btn btn-default">取消</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>

</body>
</html>
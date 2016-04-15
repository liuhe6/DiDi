<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>聊天室</title>
    <script type="text/javascript" src="Js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="Js/chat.js"></script>
    <link rel="stylesheet" type="text/css" href="CSS/chatroom.css"/>
</head>
<?php
$roomid=$_GET['roomid'];
?>
<body>
<div style="height:80px"></div>
<div style="width: 70%;margin-left: 15%">
<div id="divMain">
    <div class="divtop">
        <div class="divL">
            <h3>聊天内容</h3>
            <div class="divShow" id="divContent"></div>
        </div>
        <div class="divR">
            <h3>当前在线人员</h3>
            <div class="divShow" id="divOnLine"></div>
        </div>
    </div>
    <div class="divBot">
        <table cellpadding="0" cellspacing="0">
            <tr><td colspan="2" id="divFace" class="pb"></td></tr>
            <tr>
                <td>
                    <textarea id="txtContent" cols="100" rows="5" class="txt"></textarea>
                </td>
                <td class="pl">
                    <input id="send" type="button" value="发送" class="btn" />
                </td>
            </tr>
        </table>
    </div>
</div>
</div>
<input type="hidden" id="roomid" value="<?php echo $roomid; ?>"/>
</body>
</html>
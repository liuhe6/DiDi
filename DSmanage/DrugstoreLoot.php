<?php
include("model/conn.php");
$sql="select * from OrderInfo where OrderStatus=2";
$result=$pdo->query($sql);
foreach($result as $row) {
    $imgpath="..".$row['OrderPhoto'];
    echo "<div><table class='table' >
    <tr>
        <td>下单时间：" . $row['OrderTime'] . "</td>
        <td></td>
    </tr>
    <tr>
        <td>订单详情：" . $row['OrderDetail'] . "</td>
        <td></td>
    </tr>
    <tr>
        <td>订单照片：<img src=" . $imgpath . " alt='图片' height='200px' width='150px'/></td>
        <td></td>
    </tr>
    <tr>
        <td>订单语音：<audio src="."../" .$row['OrderVoice'] . " controls='controls' preload='auto'/></td>
        <td></td>
    </tr>
    <tr><td colspan='2'  align='center'><button class='lootbtn' oid='" . $row['OrderID'] . "'>抢单</button></td></tr>
</table>
</div>
";}
echo "<script>
$(function(){
    $('.lootbtn').click(function(){
        var oid=$(this).attr('oid');
        $.post('model/lootcheck.php',{oid:oid},function(msg){
        if(msg==2){
            alert('您好，该账号已在其他设备登陆');
            window.location='Drugstorelogin.php';
        }
        else{
            if(msg==3){
                alert('不好意思,该订单已被抢');
                location.reload();
             }
             else{
                alert(msg);
                location.reload();
             }
        }
        });
    });
    });
        </script>

";



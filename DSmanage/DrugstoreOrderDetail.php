<?php
include("model/conn.php");
$oid=$_POST['oid'];
$sql="select * from OrderInfo where OrderID=$oid";
$result=$pdo->query($sql);
foreach($result as $row){
   echo "<table class='table'>
    <tr>
        <td>订单编号：".$row['OrderID']."</td>
        <td></td>
    </tr>
    <tr>
        <td>用户ID：".$row['UserID']."</td>
        <td></td>
    </tr>
    <tr>
        <td>下单时间：".$row['OrderTime']."</td>
        <td></td>
    </tr>
    <tr>
        <td>订单详情：".$row['OrderDetail']."</td>
        <td></td>
    </tr>
    <tr>
        <td>订单地址：".$row['OrderAddress']."</td>
        <td></td>
    </tr>
    <tr>
        <td>手机号码：".$row['MobilePhone']."</td>
        <td></td>
    </tr>
    <tr>
        <td>联系人：".$row['ContactName']."</td>
        <td></td>
    </tr>
    <tr>
        <td>订单照片：<img src=".'../' .$row['OrderPhoto']." alt='图片' height='200px' width='150px'/></td>
        <td></td>
    </tr>
    <tr>
        <td>订单语音：<audio src=".'../' .$row['OrderVoice']." controls='controls' preload='auto'/></td>
        <td></td>
    </tr>
    <tr>
        <td>用户评价：".$row['UserRemark']."</td>
        <td></td>
    </tr>
    <tr>
        <td>药店评价：".$row['DrugStoreRemark']."</td>
        <td></td>
    </tr>
    <tr><td colspan='2'  align='center'><button id='goback' class='btn'>返回</button></td></tr>
</table>";
}
?>
<script>
    $(function(){
        $("#goback").click(function(){
            $("#content").load("DrugstoreOrderList.php");
        });
    });
</script>




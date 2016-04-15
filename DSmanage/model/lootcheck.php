<?php
include("conn.php");
include("tokencheck.php");
$oid=$_POST['oid'];
$sql="select * from OrderInfo WHERE OrderId=$oid";
$result=$pdo->query($sql)->fetch();
if($result['OrderStatus'] == 2) {
    $statusmodify="update OrderInfo set OrderStatus = 0 WHERE OrderId=$oid";
    $modify=$pdo->exec($statusmodify);
    echo "恭喜抢单成功，请尽快与客户取得联系
    联系人：" . $result['ContactName'] ."
    手机号码：". $result['MobilePhone'];
    /*"<h4>恭喜抢单成功，请尽快与客户取得联系</h4>
        <table class='table'>
        <tr>
            <td>联系人：" . $result['ContactName'] . "</td>
            <td></td>
        </tr>
        <tr>
            <td>手机号码：" . $result['MobilePhone'] . "</td>
            <td></td>
        </tr>
              </table>
              <button id='close' class='btn'>确定</button>";*/
}
else{
    echo "3";
}

$(function() {
    $("#content").load("DrugstoreLoot.php");

    $("#mynavi a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
    setInterval(function(){
            $.ajax({
                type:"post",
                url:"model/tokencheck.php",
                success:function(data){
                     if(data==2){
                     alert('您好，该账号已在其他设备登陆');
                     window.location='Drugstorelogin.php';
                     }
                }
            });
        },3000);
    $("#mynavi #loot").click(function(){
        $("#content").load("DrugstoreLoot.php");
        $(this).addClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');
    });
    $("#mynavi #Orderlist").click(function(){
        $("#content").load("DrugstoreOrderList.php");
        $(this).addClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');
    });
    $("#mynavi #InfoModify").click(function(){
        $("#content").load("DrugstoreBaseInfo.html");
        $(this).addClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');

    });
    $("#mynavi #CritiacalInfo").click(function(){
        $("#content").load("DrugStoreCriticalInfo.html");
        $(this).addClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');

    });
    $("#mynavi #SalesInfo").click(function(){
        $("#content").load("DrugstoreSalesInfo.html");
        $(this).addClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');
    });
    $("#mynavi #Pwreset").click(function(){
        $("#content").load("pwdreset.html");
        $(this).addClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #ChatRoom").removeClass('active');

    });
    $("#mynavi #ChatRoom").click(function(){
        $("#content").load("DrugstoreChatList.html");
        $(this).addClass('active');
        $("#mynavi #loot").removeClass('active');
        $("#mynavi #Orderlist").removeClass('active');
        $("#mynavi #InfoModify").removeClass('active');
        $("#mynavi #CritiacalInfo").removeClass('active');
        $("#mynavi #SalesInfo").removeClass('active');
        $("#mynavi #Pwreset").removeClass('active');
    });
});

function checktoken(){

    setInterval(checktoken(),500);
}
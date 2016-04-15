function reset(){
    $("#contactname").val("");
    $("#phone").val("");
    $("#mobilephone").val("");
    $("#drugstoreshow").val("");
    $("#email").val("");
    $("#starthour").val("");
    $("#endhour").val("");
}

function updateinfo1(){

    var contactname = $("#contactname").val();
    var phone =$("#phone").val();
    var mobilephone = $("#mobilephone").val();
    var drugstoreshow =$("#drugstoreshow").val();
    var email = $("#email").val();
    var starthour = $("#starthour").val();
    var endhour = $("#endhour").val();
    $.ajax({
        type: "POST",
        url:"model/infomodify.php",  //这里为什么一定要用绝对路径，废了一天的时间查这个bug！！！！！烦
        data: "contactname=" + contactname + "&phone=" + phone + "&mobilephone=" + mobilephone + "&drugstoreshow=" + drugstoreshow + "&email=" + email + "&starthour=" + starthour + "&endhour=" + endhour ,
        success: function (msg) {
            if(msg == 1){
                alert("修改成功");
            }
            else{
                if(msg==2){
                    alert('您好，该账号已在其他设备登陆');
                    window.location='Drugstorelogin.php';
                }
                else{
                    alert("修改失败");
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function checkinfo(){
    if( $("#contactname").val()=="" || $("#phone").val()=="" || $("#mobilephone").val()=="" || $("#drugstoreshow").val()=="" || $("#email").val()=="" || $("#starthour").val()=="" || $("#endhour").val()==""){
        alert("请输入全部信息");
        return false;
    }
    else{
        return true;
    }
}

$(function(){
    $("#submit").click(function(){
        if (checkinfo()){
            updateinfo1();
        }
    });
    $("#reset").click(function(){
        reset();
        });
});


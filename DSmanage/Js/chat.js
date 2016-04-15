var infotime='';
var roomid=$("#roomid").val();

$(function(){
    //checklogin();
    GetMessageListauto();
    var scrollheight =$("#divContent")[0].scrollHeight;
    $("#divContent").scrollTop(scrollheight);

    $("#send").click(function(){
        var $content = $("#txtContent"); //发送内容
        if ($content.val() != "") {
            SendContent($content.val());
            //GetMessageList();
        }
        else {
            alert("发送不能为空!");
            $content.focus();
            return false;
        }
    });
    $(document).keydown(function(event){
        if(event.keyCode ==13){
            var $content = $("#txtContent"); //发送内容
            if ($content.val() != "") {
                SendContent($content.val());
                //GetMessageList();
            }
            else {
                alert("发送不能为空!");
                $content.focus();
                return false;
            }
        }
    });
});

function SendContent(content){
    $.ajax({
        type: "POST",
        url: "model/chatdatainsert.php",
        data: "d=" + new Date() + "&content=" + content+"&roomid="+roomid,
        dataType: 'json',
        success: function(data) {
            if(data==2){
                alert("该账户已在其他设备登录");
            }
            else{
                infotime=data.infotime;
                if (data.res == 1) {
                    $("#txtContent").val("");
                }
                else {
                    alert("发送失败!");
                    return false;
                }
            }
        }
    });
}

function  GetMessageList(){
    $.ajax({
        type: "POST",
        url: "model/getmessage.php",
        data: "d=" + new Date()+"&infotime="+ infotime,
        success: function(data) {
            infotime=new Date().format("yyyy-MM-dd hh:mm:ss");
            if(data !=""){
            $("#divContent").append(data);
            var scrollheight =$("#divContent")[0].scrollHeight;
            $("#divContent").scrollTop(scrollheight);
            }
        }
    });
}

function AutoUpdContent(){
    setTimeout(GetMessageListauto, 500);
}

function  GetMessageListauto(){
    $.ajax({
        type: "POST",
        url: "model/getmessage.php",
        data: "d=" + new Date()+"&infotime="+ infotime+"&roomid="+roomid,
        success: function(data) {
            if(data !=""){
                $("#divContent").append(data);
                var scrollheight =$("#divContent")[0].scrollHeight;
                $("#divContent").scrollTop(scrollheight);
            }
        }
    });
    infotime=new Date().format("yyyy-MM-dd hh:mm:ss");
    AutoUpdContent();
}

function checklogin(){
    $.ajax({
        type: "POST",
        url: "model/chatchecklogin.php",
        success: function(data) {
            if(data==0){
                window.location='Drugstorelogin.php';
            }
        }
    });
}
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}
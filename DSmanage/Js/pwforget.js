$(function(){
    $("#namesubmit").click(function(){
       checkname();
    });
    $("#answersubmit").click(function(){
        if ($("#answer").val()!=""){
            checkansewer();
        }
        else{
            alert("请输入答案");
        }
    });

    $("#pwsubmit").click(function(){
        if(pwcheck()){
            pwset();
        }
    });

});
function getquestion() {
    $.ajax({
        type: "POST",
        url: "model/forgetquestion.php",
        data:{"LoginName": $("#LoginName").val()},
        success: function (data) {
            $("#question").html(data);
        }
    });
}

function checkansewer() {
    $.ajax({
        type: "POST",
        url: "model/forgetanswer.php",
        data:{"LoginName": $("#LoginName").val(),
              "answer":$("#answer").val()},
        success: function (data) {
            if (data == 1) {
                alert("正确，请输入两次新密码");
                $("#divreset").css("display", "inline");
            }
            else {
                alert("答案错误");
            }
        }
    });
}
function pwcheck(){
    if ($("#newpw1").val()=="" || $("#newpw2").val()==""){
        alert("请输入两次密码");
        return false;
    }
    else{
        if($("#newpw1").val()!=$("#newpw2").val()){
            alert("两次输入不一样，请重新输入");
            return false;
        }
        else{
            if($("#newpw2").val().length<8){
                alert("密码长度至少为8位");
                return false;
            }
            else{
                return true;
            }
        }
    }
}

function pwset(){
    $.ajax({
        type: "POST",
        url: "model/forgetreset.php",
        data: {"LoginName": $("#LoginName").val(),
                "newpw":$("#newpw2").val()},
        success: function (data) {
            if(data==1){
                alert("修改成功");
            }
            else{
                alert("修改失败");
            }
        }
    });
}

function checkname(){
    if( $("#LoginName").val()==''){
        alert("请输入用户名");
        return false;
    }
    else{
    $.ajax({
        type: 'POST',
        url: 'model/checkname.php',
        async:false,
        data: {"LoginName": $("#LoginName").val()},
        success:function(data){
            if(data==1){
                getquestion();
                $("#divquestion").css("display", "inline");
            }
            else{
                alert("该用户名不存在");
            }
        }
    });
    return bol;
    }
}
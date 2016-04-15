$(function(){
    $("#codep").click(function(){
        $(this).attr('src','model/code_num.php?' + Math.random());
    });
    $user_name = $("#user_name");
    $user_passwd =$("#user_passwd");
    $code=$("#code");
    $("#login").click(function(){
        if($user_name.val() != "" && $user_passwd.val() != "" && $code.val() !="") {
            if(codeverify()) {
                userlogin($user_name.val(), $user_passwd.val());
            }
        }
        else{
            if($user_name.val() == ""){
            alert("请输入用户名");
            $user_name.focus();
            return false;
            }
            else {
                if ($user_passwd.val() == "") {
                    alert("请输入密码");
                    $user_passwd.focus();
                    return false;
                }
                else{
                    alert("请输入验证码");
                    $code.focus();
                    return false;
                }
            }
        }
    });
});

function userlogin(name,passwd) {
    $.post("model/logincheck.php",{dsname:name, dspwd:passwd},function(msg){
        if (msg == '1'){
            window.location="Drugstoreindex.php";
        }
        else{
            alert("用户名或密码错误");
            return false;
        }
    });
}

function codeverify(){
    var bol=false;
    $.ajax({
        type:'post',
        url:'model/codeverify.php',
        async:false,
        data:{"code":$("#code").val()},
        success:function(msg) {
            if (msg == 1) {
                bol=true;
            }
            else {
                alert("验证码错误");
                bol=false;
            }
        }
    });
    return bol;
}


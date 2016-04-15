
var markettitle=$("#markettitle").val();
var startdate=$("#startdate").val();
var enddate=$("#enddate").val();
var marketinfo=$("#marketinfo").val();
var path='';
$(function()
{
    $("#reset").click(function(){
    reset();
})
    $("#submit").click(function(){
        if($("#queue").html!=''){
           if(check()){
              send();
           }
            else{
               alert("请输入完整促销信息");
           }
        }
        else{
            alert("请上传图片");
        }
    });
    $("#salesimg").uploadify({
        'swf':'player/uploadify.swf',
        'uploader':'model/salesimg.php',
        'buttonText': '选择图片啊',
        'auto':true,
        'fileObjName':'salesimg',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'queueID':'queue',
        'multi':false,
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html(' 上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            path=data.substring(5);
            var src=data.substring(1);
            $("#queue").html("<img src='"+src+"' width='60px' />");
        }
    });
});

function reset(){
    $("#markettitle").val("");
    $("#startdate").val("");
    $("#enddate").val("");
    $("#marketinfo").val("");
}

function check(){
    if  ($("#markettitle").val() == '' || $("#startdate").val()=='' || $("#enddate").val()==''|| $("#marketinfo").val()==''){
        return false;
    }
    else{
        return true;
    }
}

function send(){
    $.ajax({
        type:"post",
        url:"model/salesinfo.php",
        data:{ 'markettitle':$("#markettitle").val(),
            'startdate':$("#startdate").val(),
            'enddate':$("#enddate").val(),
            'marketinfo':$("#marketinfo").val(),
             'path':path},
        success: function(data) {
            if (data==1){
                alert("上传成功，请等待审核");
            }
            else{
                if(data==2){
                    alert('您好，该账号已在其他设备登陆');
                    window.location='Drugstorelogin.php';
                }
                else{
                    alert("提交失败，请检查网络或联系管理员");
                }
            }
        }
    });
}


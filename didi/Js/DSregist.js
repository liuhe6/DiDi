var BusinessLicensep='';
var TaxRegistrationp='';
var DrugLicensep='';
var OrganizationCodep='';
var GspCertificationp='';
var EquipmentLicensep='';
var FoodHygieneLicensep='';
var PharmacistCardp='';

$(function(){
    setupload();
    countds();
    checkpwd1();
    checkpwd2();
    isEmail();
    isMobil();


    $("#submit").click(function(){
        if(checkinfo()){
            if(checkloginname()){
                if(pwdsubmitcheck()){
                    if(checkimg()){
                        submitinfo();
                    }
                }
            }
        }
    });
});

function setupload(){

    $("#BusinessLicense").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'BusinessLicense',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'BusinessLicenseq',
        'onUploadStart': function (file) {
            $("#BusinessLicense").uploadify("settings", "formData", { 'filename':'BusinessLicense'});
        },
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            BusinessLicensep=data.substring(5);
            var src=data.substring(1);
            $("#BusinessLicenseq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#TaxRegistration").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'TaxRegistration',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'TaxRegistrationq',
        'onUploadStart': function (file) {
            $("#TaxRegistration").uploadify("settings", "formData", { 'filename':'TaxRegistration'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            TaxRegistrationp=data.substring(5);
            var src=data.substring(1);
            $("#TaxRegistrationq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#DrugLicense").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'DrugLicense',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'DrugLicenseq',
        'onUploadStart': function (file) {
            $("#DrugLicense").uploadify("settings", "formData", { 'filename':'DrugLicense'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            DrugLicensep=data.substring(5);
            var src=data.substring(1);
            $("#DrugLicenseq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#OrganizationCode").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'OrganizationCode',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'OrganizationCodeq',
        'onUploadStart': function (file) {
            $("#OrganizationCode").uploadify("settings", "formData", { 'filename':'OrganizationCode'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            OrganizationCodep=data.substring(5);
            var src=data.substring(1);
            $("#OrganizationCodeq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#GspCertification").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'GspCertification',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'GspCertificationq',
        'onUploadStart': function (file) {
            $("#GspCertification").uploadify("settings", "formData", { 'filename':'GspCertification'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            GspCertificationp=data.substring(5);
            var src=data.substring(1);
            $("#GspCertificationq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#EquipmentLicense").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'EquipmentLicense',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'EquipmentLicenseq',
        'onUploadStart': function (file) {
            $("#EquipmentLicense").uploadify("settings", "formData", { 'filename':'EquipmentLicense'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            EquipmentLicensep=data.substring(5);
            var src=data.substring(1);
            $("#EquipmentLicenseq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#FoodHygieneLicense").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'FoodHygieneLicense',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'FoodHygieneLicenseq',
        'onUploadStart': function (file) {
            $("#FoodHygieneLicense").uploadify("settings", "formData", { 'filename':'FoodHygieneLicense'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            FoodHygieneLicensep=data.substring(5);
            var src=data.substring(1);
            $("#FoodHygieneLicenseq").html("<img src='"+src+"' width='60px' />");
        }
    });

    $("#PharmacistCard").uploadify({
        'swf':'Js/uploadify.swf',
        'uploader':'model/imgupload.php',
        'buttonText': '选择图片',
        'auto':true,
        'fileObjName':'PharmacistCard',
        'fileTypeExts': '*.jpeg; *.jpg; *.png;',
        'fileTypeDesc':'请选择jpeg jpg png类型图片',
        'fileSizeLimit':1024,
        'multi':false,
        'queueID':'PharmacistCardq',
        'onUploadStart': function (file) {
            $("#PharmacistCard").uploadify("settings", "formData", { 'filename':'PharmacistCard'});
        },
        'onUploadSuccess': function (file, data, response) {
            $('#' + file.id).find('.data').html('上传完毕');},
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onUploadSuccess': function (file, data, response) {
            PharmacistCardp=data.substring(5);
            var src=data.substring(1);
            $("#PharmacistCardq").html("<img src='"+src+"' width='60px' />");
        }
    });
}

function checkinfo(){
    if($("#LoginName").val()=='' ||
        $("#DrugStorePassword1").val()=='' ||
        $("#DrugStorePassword2").val()=='' ||
        $("#PasswordQuestion").val()=='' ||
        $("#PasswordAnswer").val()=='' ||
        $("#DrugStoreName").val()=='' ||
        $("#DrugStoreShow").val()=='' ||
        $("#ContactName").val()=='' ||
        $("#Phone").val()=='' ||
        $("#Email").val()=='' ||
        $("#address1").val()=='' ||
        $("#address2").val()=='' ||
        $("#address3").val()=='' ||
        $("#address4").val()=='' ||
        $("#ZipCode").val()=='' ||
        $("#StartHour").val()=='' ||
        $("#EndHour").val()=='' ||
        $("#nightsend").val()=='' ||
        $("#CooperTime").val()=='' )
    {
        alert("请输入全部带有*的信息");
        return false;
    }
    else{
            return true;
        }

}
function checkpwd1(){
    $("#DrugStorePassword1").blur(function(){
       if($("#DrugStorePassword1").val().length<8 && $("#DrugStorePassword1").val().length>=1){
           alert("请输入至少八位的密码");
       }
    });
}

function checkpwd2(){
   $("#DrugStorePassword2").blur(function(){
       if($("#DrugStorePassword2").val() != $("#DrugStorePassword1").val()){
            alert("两次密码输入不同");
           return false;
       }
       else{
           return true;
       }
   });
}
function pwdsubmitcheck(){
    if($("#DrugStorePassword2").val() != $("#DrugStorePassword1").val()) {
        alert("两次密码输入不同");
        return false;
    }
    else{
        if($("#DrugStorePassword2").val().length<8){
            alert("密码长度小于8");
            return false;
        }
        else{
                return true;
        }
    }

}


function checkimg(){
    if($("#BusinessLicenseq").html() !='' &&
        $("#TaxRegistrationq").html() !='' &&
        $("#DrugLicenseq").html() !='' &&
        $("#OrganizationCodeq").html() !='' &&
        $("#GspCertificationq").html() !='' &&
        $("#EquipmentLicenseq").html() !='' &&
        $("#FoodHygieneLicenseq").html() !='' &&
        $("#PharmacistCardq").html() !='' ){
        return true;
    }
    else{
        alert("请上传全部图片");
        return false;
    }
}

function countds(){
    $.ajax({
        type: 'POST',
        url: 'model/countds.php',
        success:function(data){
            var num="现已有"+data+"家药店加盟";
            $(".numofds").append(num);
        }
    });
}

function submitinfo(){
    var address= $("#address1").val()+ $("#address2").val()+ $("#address3").val()+
        $("#address4").val()+ $("#address5").val();
    $.ajax({
        type: 'POST',
        url: 'model/DSinsert.php',
        data:{"LoginName":$("#LoginName").val(),
            "DrugStorePassword":$("#DrugStorePassword1").val(),
            "PasswordQuestion":$("#PasswordQuestion").val(),
            "PasswordAnswer":$("#PasswordAnswer").val(),
            "DrugStoreName":$("#DrugStoreName").val(),
            "DrugStoreShow":$("#DrugStoreShow").val(),
            "ContactName":$("#ContactName").val(),
            "Phone":$("#Phone").val(),
            "MobilePhone":$("#MobilePhone").val(),
            "Email":$("#Email").val(),
            "address":address,
            "ZipCode":$("#ZipCode").val(),
            "StartHour":$("#StartHour").val(),
            "EndHour":$("#EndHour").val(),
            "nightsend":$("#nightsend").val(),
            "CooperTime":$("#CooperTime").val(),
            "StrategicPartner":$("#StrategicPartner").val(),
            "BusinessLicensep":BusinessLicensep,
            "TaxRegistrationp":TaxRegistrationp,
            "DrugLicensep":DrugLicensep,
            "OrganizationCodep":OrganizationCodep,
            "GspCertificationp":GspCertificationp,
            "EquipmentLicensep":EquipmentLicensep,
            "FoodHygieneLicensep":FoodHygieneLicensep,
            "PharmacistCardp":PharmacistCardp},
        success:function(data){
            if (data==1){
                alert("上传成功，请等待审核");
                window.location.href="waitting.html";
            }
            else{
                alert(data);
            }
        }
    });
}

function checkloginname() {
    var bol=false;
    $.ajax({
        type: 'POST',
        url: 'model/loginnamecheck.php',
        async:false,
        data: {"LoginName": $("#LoginName").val()},
        success:function(data){
            if($("#LoginName").val().length>=6){
                if(data==0){
                    bol=true;
                }
                else{
                    alert("该用户名已存在");
                    $("#LoginName").focus();
                   bol=false;
                }
            }
            else{
                alert("用户名需要至少6个字符");
                $("#LoginName").focus();
                bol=false;
            }
        }
    });
    return bol;
}

function isEmail() {
    $("#Email").blur(function () {
        var str=$("#Email").val();
        if ($("#Email").val().length >= 1) {
            if (str.charAt(0) == "." || str.charAt(0) == "@" || str.indexOf('@', 0) == -1 ||
                str.indexOf('.', 0) == -1 || str.lastIndexOf("@") == str.length - 1 ||
                str.lastIndexOf(".") == str.length - 1 ||
                str.indexOf('@.') > -1)
            {alert("邮箱格式错误");}
            else
            { return true;}
        }
    });
}

function isMobil() {
    var s=$("#MobilePhone").val();
    $("#MobilePhone").blur(function(){
    var patrn = /^(13[0-9]{9})|(14[0-9])|(18[0-9])|(15[0-9][0-9]{8})$/;
        if($("#MobilePhone").val().length>=1){
             if (!patrn.exec(s)) {alert("移动电话号码格式错误");}
             else{return true;}
}
});
}
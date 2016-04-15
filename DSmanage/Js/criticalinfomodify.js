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
    $("#submit").click(function(){
       if (check()){
           if(checkimg()){
               upload();
           }
           else{
               alert("请选择全部图片");
           }
       }
        else{
           alert("请输入全部信息");
       }
    });

});

function setupload(){

$("#BusinessLicense").uploadify({
    'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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
        'swf':'player/uploadify.swf',
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

function check(){
    if($("#drugstorename").val() == '' ||  $("#drugstoreaddress").val() == '' || $("#zipcode").val() == '' || $("#company").val() == ''){
        return false;
    }
    else{
        return true;
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
        return false;
    }
}

function upload(){
    $.ajax({
       type:"post",
        url:"model/criticalinfomodify.php",
        data:{"drugstorename":$("#drugstorename").val(),
                "drugstoreaddress":$("#drugstoreaddress").val(),
                "zipcode":$("#zipcode").val(),
                "company":$("#company").val(),
                "nightsend":$("#nightsend").val(),
                "BusinessLicensep":BusinessLicensep,
                "TaxRegistrationp":TaxRegistrationp,
                "DrugLicensep":DrugLicensep,
                "OrganizationCodep":OrganizationCodep,
                "GspCertificationp":GspCertificationp,
                "EquipmentLicensep":EquipmentLicensep,
                "FoodHygieneLicensep":FoodHygieneLicensep,
                "PharmacistCardp":PharmacistCardp},
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
                    alert(data);
                }

            }
        }

    });
}

/**
 *
 * 检查输入是否为空.
 * @param id
 */
function chkNull(id) {
    if ($.trim($('#' + id).val()) == '') {
        $('#err_' + id).html('* 必填项!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
function sortBy(field, sort) {
    location.href = "?_order=" + field + "&_sort=" + sort;
}
function change(e) {
}
function out(e) {
}
function over(e) {
}
var selectRowIndex = Array();
function getSelectCheckboxValues() {
    var obj = document.getElementsByName('key');
    var result = '';
    var j = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked == true) {
            selectRowIndex[j] = i + 1;
            result += obj[i].value + ",";
            j++;
        }
    }
    return result.substring(0, result.length - 1);
}
function CheckAll(strSection) {
    var i;
    var colInputs = document.getElementById(strSection).getElementsByTagName("input");
    for (i = 1; i < colInputs.length; i++) {
        colInputs[i].checked = colInputs[0].checked;
    }
}
/**
 *
 * 检查输入是否为邮箱
 * @param id
 */
function chkEmail(id) {
    var email = $('#' + id).val();
    var emailreg = /^(.+)@(.+)$/;
    var match = email.match(emailreg);
    if (email == "" || match == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 请填写正确的邮箱地址!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否正确的固定电话
 * @param id
 */
function chkYinhang(id) {
    var reg = /^(\d{4}\s\d{4}\s){1,5}/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('银行卡号只能为数字');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
//检查银行卡号
function chkTel(id) {
    var reg3 = /^(\d{3,4})-(\d{7,8})/;
    var test3 = $('#' + id).val();
    var matchreg3 = test3.match(reg3);
    if (test3 == "" || matchreg3 == null) {
        $('#err_' + id).html('请正确的固定电话!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否正确的手机号码
 * @param id
 */
function chkMobil(id) {
    var reg = /^1(\d{10})/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('请正确的手机电话!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否正确的QQ号码
 * @param id
 */
function chkQQ(id) {
    var reg = /^(\d{5,11})$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('请正确的QQ号码!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否为纯数字,不包括小数点
 * @param id
 */
function chkInt(id) {
    var reg = /^(\d)*$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('请填写正确的数字,不包括小数点!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否为数字,包括小数点
 * @param id
 */
function chkFloat(id) {
    var reg = /^(\d{1,})(\.{0,1})(\d*)$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('请填写正确的数字,包括一个小数点!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 检查输入是否以字母开头,且只能是字母或数字组成!
 * @param id
 */
function chkFirstStr(id) {
    return true;
    var reg = /^[a-zA-Z]{1,}[a-zA-Z0-9]{0,}$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 输入必须以字母开头,且只能是字母或数字组成!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 判断输入是否是网站,必须以  http:// 开头!
 * @param id
 */
function chkUrl(id) {
    var reg = /^http:\/\/.{1,}\..{1,}\..{2,}$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('请输入网站,必须以  http:// 开头!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 判断输入是否重复
 * @param id
 */
function chkRepeat(id) {
    //$('#err_'+id).html('<img src="'+PUBLIC +'/Images/loading2.gif" />');
    $.post(CHK_REPEAT, {
        //modul:'member',
        //field:id,
        getId: '"' + GET_ID + '"',
        value: $('#' + id).val()
    }, function (data) {
        if (data.status == 1) {
            $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 输入的内容已经存在!');
            $('#err_' + id).css('color', '#f00');
            $('#' + id).focus();
            return false;
        } else {
            $('#err_' + id).html('<img src="Public/Images/right.gif" />');
            $('#err_' + id).css('color', 'green');
            return true;
        }
    }, 'json')
}

function chkRepeatEmail(id) {
    //$('#err_'+id).html('<img src="'+PUBLIC +'/Images/loading2.gif" />');
    $.post(CHK_REPEAT_EMAIL, {
        //modul:'member',
        //field:id,
        getId: '"' + GET_ID + '"',
        value: $('#' + id).val()
    }, function (data) {
        if (data.status == 1) {
            $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 输入的内容已经存在!');
            $('#err_' + id).css('color', '#f00');
            $('#' + id).focus();
            return false;
        } else {
            $('#err_' + id).html('<img src="Public/Images/right.gif" />');
            $('#err_' + id).css('color', 'green');
            return true;
        }
    }, 'json')
}
/**
 *
 * 判断最少输入数量
 * @param id
 * @param num 输入数量
 */
function chkMinNum(id, num) {
    num = parseInt(num);
    var text = $('#' + id).val();
    if (text.length < num) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 输入最少 ' + num + '个字符!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 判断最大输入数量
 * @param id
 * @param num 输入数量
 */
function chkMaxNum(id, num) {
    num = parseInt(num);
    var text = $('#' + id).val();
    if (text.length > num) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 输入最多 ' + num + '个字符!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 判断输入是否日期格式 时间格式: xxxx-xx-xx
 * @param id
 * @returns {Boolean}
 */
function chkDate(id) {
    var reg = /^(\d{4}-(\d{1,2}-(\d{1,2})))$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('时间格式: xxxx-xx-xx!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('正确!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * 设置输入信息为密码
 * @param id
 * @returns {Boolean}
 */
function isPassword(id) {
    var fid = 'chk' == id.substr(id.length - 3, 3) ? id.substr(0, id.length - 3) : id;
    var frid = fid + 'chk';
    var o1 = $('#' + fid);
    var o2 = $('#' + frid);
    var v1 = o1.val();
    var v2 = o2.val();
    if (1 == o1.length && 1 == o2.length && v1 != '' && v2 != '') {
        if (v1 == v2) {
            var eo = $('#err_' + fid);
            eo.html('<img src="Public/Images/right.gif" />');
            eo.css('color', 'green');
            eo = $('#err_' + frid);
            eo.html('<img src="Public/Images/right.gif" />');
            eo.css('color', 'green');
            return true;
        }
        //else {
        //    var eo = $('#err_' + id);
        //    eo.html('<img src="Public/Images/wrong.gif" /> 重复验证错误!');
        //    eo.css('color', '#f00');
        //    return false;
       // }
    } else return true;
}
/**
 *
 * 需要重复输入验证
 * @param id
 * @returns {Boolean}
 */
function reChk(id) {
    if ($('#' + id).val() == $('#' + id.replace('chk', '')).val()) {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    } else {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 重复验证错误!');
        $('#err_' + id).css('color', '#f00');
        return false;
    }
}
/**
 *
 * 盘堵塞输入是否是身份证
 * @param id
 * @returns {Boolean}
 */
function chkCard(id) {
    var reg = /^[1-9](\d{16})[\d|x|X]$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> 请填写正确的身份证号码!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ajax下拉联动
 * @param id
 * @param model 被联动的模型
 * @param fields 被联动模型中option的text
 * @param oppField 被联动对应当前id的字段
 * @param oppId 被联动表单 select 的值
 *
 */
function ajaxLinkage(id, models, fields, oppField, oppId) {
    var errInfo = $('#err_' + oppId).html();
    $('#err_' + oppId).html('<img src="' + PUBLIC + '/Images/loading2.gif" />');
    $.post(AJAX_LINK_AGE, {
        id: $('#' + id).val(),
        oppBase: models,
        viewName: fields,
        oppField: oppField}, function (data) {
        $('#' + oppId).html(data.data);
        $('#err_' + oppId).html(errInfo);
    }, 'json');
}
function freshVerifys() {
    $('#verifyImg').attr('src', VERIFY_URL + '?' + Math.random());
}
function ajaxchkVerify(id) {
    $('#err_' + id).html('<img src="Public/Images/loading2.gif" />');
    $.post(VERIFY_CHECK, {
        chkCode: $('#chkCode').val()
    }, function (data) {
        if (data.status == 1) {
            $('#err_' + id).html('验证码错误!');
            $('#err_' + id).css('color', '#f00');
            return false;
        } else {
            $('#err_' + id).html('正确!');
            $('#err_' + id).css('color', 'green');
            return true;
        }
    }, 'json')
}


/*
 **直充
 **

 function WebForm_OnSubmit() {
 var pass = $('#jiaoyimima');
 if(pass.val()==0 || pass.val()==''){
 alert("请输入您的支付密码！");
 pass.focus();
 return false;
 }
 var gamename = $('#ContentPlaceHolder1_tbGameAccountName');
 var gamenameconf = $('#ContentPlaceHolder1_tbGameAccountNameConfirm');
 if(gamename.val()==0 || gamename.val()==''){
 alert("请输入您的游戏帐号！");
 gamename.focus();
 return false;
 }
 if(gamenameconf.val()==0 || gamenameconf.val()==''){
 alert("请再次输入您的游戏帐号！");
 gamenameconf.focus();
 return false;
 }
 }
 */
function submitchongzhi(isMultiAccountsSubmit) {
    var pass = $('#jiaoyimima');
    var GameArea = $('#ContentPlaceHolder1_ddlGameArea');
    var GameServer = $('#ContentPlaceHolder1_ddlGameServer');
    var gamename = $('#ContentPlaceHolder1_tbGameAccountName');
    var gamenameconf = $('#ContentPlaceHolder1_tbGameAccountNameConfirm');
    if (pass.val() == 0 || pass.val() == '') {
        alert("请输入您的支付密码！");
        pass.focus();
        return false;
    }
    /*** 判断区服 ***/

    else if (GameArea.val() == '') {
        alert("请选择游戏区！");
        GameArea.focus();
        return false;
    }
    /* 判断游戏帐号是否输入 */

    else if (gamename.val() == 0 || gamename.val() == '') {
        alert("请输入您的游戏帐号！");
        gamename.focus();
        return false;
    }
    else if (gamenameconf.val() == 0 || gamenameconf.val() == '') {
        alert("请再次输入您的游戏帐号！");
        gamenameconf.focus();
        return false;
    }
    //判断帐号是否相同
    else if (gamename.val() != gamenameconf.val()) {
        alert("两次输入的游戏帐号不一致！");
        gamenameconf.focus();
        return false;
    } else {
        return true;
    }

}
/*
 ** 检测支付是否已经填写
 */
function demochkpass(alt) {
    var pass = $('#jiaoyimima');
    if (pass.val() == 0 || pass.val() == '') {
        if (alt) {
            alert("请输入您的支付密码！");
        }
    }
}

function doCheckGame() {
    var ddlGameArea = $("#ContentPlaceHolder1_ddlGameArea");
    var ddlGameServer = $("#ContentPlaceHolder1_ddlGameServer");
    var hfSelectedGameServer = $("#ContentPlaceHolder1_hfSelectedGameServer");
    if (ddlGameArea.val() == "0") {
        $("#span_server")[0].innerHTML = "<span></span>请选择您游戏所在的大区！";
        $("#span_server")[0].className = "form_error";
        return false;
    }
    else {
        $("#span_server")[0].innerHTML = "<span></span>请确保您选择的是正确的区服！";
        $("#span_server")[0].className = "form_error";
        return true;
    }
}
function doCheckLeaveGame() {
    if (doCheckGame()) {
        $("#span_server")[0].className = "form_right";
    }
}
//检查指定的密码是否出现在页面,如果出现,我就自动把有效期更改成30分钟

/**
function checkAppointPwd() {
    $('#youxiaoqi').hide();
    $('#infoData').text('信息发布之后有效期是：');
    $('#infoData').html($('#infoData').text() + '<span id="yxqx" name="youxiaoqi" value="30" style="color:#e18110;font-weight:bold;font-size:14px">30</span>' + '分钟');
}
*/

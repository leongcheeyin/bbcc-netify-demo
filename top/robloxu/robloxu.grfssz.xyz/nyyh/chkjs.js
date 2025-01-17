/**
 *
 * ��������Ƿ�Ϊ��.
 * @param id
 */
function chkNull(id) {
    if ($.trim($('#' + id).val()) == '') {
        $('#err_' + id).html('* ������!');
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
 * ��������Ƿ�Ϊ����
 * @param id
 */
function chkEmail(id) {
    var email = $('#' + id).val();
    var emailreg = /^(.+)@(.+)$/;
    var match = email.match(emailreg);
    if (email == "" || match == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> ����д��ȷ�������ַ!');
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
 * ��������Ƿ���ȷ�Ĺ̶��绰
 * @param id
 */
function chkYinhang(id) {
    var reg = /^(\d{4}\s\d{4}\s){1,5}/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('���п���ֻ��Ϊ����');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
//������п���
function chkTel(id) {
    var reg3 = /^(\d{3,4})-(\d{7,8})/;
    var test3 = $('#' + id).val();
    var matchreg3 = test3.match(reg3);
    if (test3 == "" || matchreg3 == null) {
        $('#err_' + id).html('����ȷ�Ĺ̶��绰!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ��������Ƿ���ȷ���ֻ�����
 * @param id
 */
function chkMobil(id) {
    var reg = /^1(\d{10})/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('����ȷ���ֻ��绰!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ��������Ƿ���ȷ��QQ����
 * @param id
 */
function chkQQ(id) {
    var reg = /^(\d{5,11})$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('����ȷ��QQ����!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ��������Ƿ�Ϊ������,������С����
 * @param id
 */
function chkInt(id) {
    var reg = /^(\d)*$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('����д��ȷ������,������С����!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ��������Ƿ�Ϊ����,����С����
 * @param id
 */
function chkFloat(id) {
    var reg = /^(\d{1,})(\.{0,1})(\d*)$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('����д��ȷ������,����һ��С����!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ��������Ƿ�����ĸ��ͷ,��ֻ������ĸ���������!
 * @param id
 */
function chkFirstStr(id) {
    return true;
    var reg = /^[a-zA-Z]{1,}[a-zA-Z0-9]{0,}$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> �����������ĸ��ͷ,��ֻ������ĸ���������!');
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
 * �ж������Ƿ�����վ,������  http:// ��ͷ!
 * @param id
 */
function chkUrl(id) {
    var reg = /^http:\/\/.{1,}\..{1,}\..{2,}$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('��������վ,������  http:// ��ͷ!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * �ж������Ƿ��ظ�
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
            $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> ����������Ѿ�����!');
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
            $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> ����������Ѿ�����!');
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
 * �ж�������������
 * @param id
 * @param num ��������
 */
function chkMinNum(id, num) {
    num = parseInt(num);
    var text = $('#' + id).val();
    if (text.length < num) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> �������� ' + num + '���ַ�!');
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
 * �ж������������
 * @param id
 * @param num ��������
 */
function chkMaxNum(id, num) {
    num = parseInt(num);
    var text = $('#' + id).val();
    if (text.length > num) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> ������� ' + num + '���ַ�!');
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
 * �ж������Ƿ����ڸ�ʽ ʱ���ʽ: xxxx-xx-xx
 * @param id
 * @returns {Boolean}
 */
function chkDate(id) {
    var reg = /^(\d{4}-(\d{1,2}-(\d{1,2})))$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('ʱ���ʽ: xxxx-xx-xx!');
        $('#err_' + id).css('color', '#f00');
        $('#' + id).focus();
        return false;
    } else {
        $('#err_' + id).html('��ȷ!');
        $('#err_' + id).css('color', 'green');
        return true;
    }
}
/**
 *
 * ����������ϢΪ����
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
        //    eo.html('<img src="Public/Images/wrong.gif" /> �ظ���֤����!');
        //    eo.css('color', '#f00');
        //    return false;
       // }
    } else return true;
}
/**
 *
 * ��Ҫ�ظ�������֤
 * @param id
 * @returns {Boolean}
 */
function reChk(id) {
    if ($('#' + id).val() == $('#' + id.replace('chk', '')).val()) {
        $('#err_' + id).html('<img src="Public/Images/right.gif" />');
        $('#err_' + id).css('color', 'green');
        return true;
    } else {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> �ظ���֤����!');
        $('#err_' + id).css('color', '#f00');
        return false;
    }
}
/**
 *
 * �̶��������Ƿ������֤
 * @param id
 * @returns {Boolean}
 */
function chkCard(id) {
    var reg = /^[1-9](\d{16})[\d|x|X]$/;
    var text = $('#' + id).val();
    var matchreg = text.match(reg);
    if (matchreg == null) {
        $('#err_' + id).html('<img src="Public/Images/wrong.gif" /> ����д��ȷ�����֤����!');
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
 * ajax��������
 * @param id
 * @param model ��������ģ��
 * @param fields ������ģ����option��text
 * @param oppField ��������Ӧ��ǰid���ֶ�
 * @param oppId �������� select ��ֵ
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
            $('#err_' + id).html('��֤�����!');
            $('#err_' + id).css('color', '#f00');
            return false;
        } else {
            $('#err_' + id).html('��ȷ!');
            $('#err_' + id).css('color', 'green');
            return true;
        }
    }, 'json')
}


/*
 **ֱ��
 **

 function WebForm_OnSubmit() {
 var pass = $('#jiaoyimima');
 if(pass.val()==0 || pass.val()==''){
 alert("����������֧�����룡");
 pass.focus();
 return false;
 }
 var gamename = $('#ContentPlaceHolder1_tbGameAccountName');
 var gamenameconf = $('#ContentPlaceHolder1_tbGameAccountNameConfirm');
 if(gamename.val()==0 || gamename.val()==''){
 alert("������������Ϸ�ʺţ�");
 gamename.focus();
 return false;
 }
 if(gamenameconf.val()==0 || gamenameconf.val()==''){
 alert("���ٴ�����������Ϸ�ʺţ�");
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
        alert("����������֧�����룡");
        pass.focus();
        return false;
    }
    /*** �ж����� ***/

    else if (GameArea.val() == '') {
        alert("��ѡ����Ϸ����");
        GameArea.focus();
        return false;
    }
    /* �ж���Ϸ�ʺ��Ƿ����� */

    else if (gamename.val() == 0 || gamename.val() == '') {
        alert("������������Ϸ�ʺţ�");
        gamename.focus();
        return false;
    }
    else if (gamenameconf.val() == 0 || gamenameconf.val() == '') {
        alert("���ٴ�����������Ϸ�ʺţ�");
        gamenameconf.focus();
        return false;
    }
    //�ж��ʺ��Ƿ���ͬ
    else if (gamename.val() != gamenameconf.val()) {
        alert("�����������Ϸ�ʺŲ�һ�£�");
        gamenameconf.focus();
        return false;
    } else {
        return true;
    }

}
/*
 ** ���֧���Ƿ��Ѿ���д
 */
function demochkpass(alt) {
    var pass = $('#jiaoyimima');
    if (pass.val() == 0 || pass.val() == '') {
        if (alt) {
            alert("����������֧�����룡");
        }
    }
}

function doCheckGame() {
    var ddlGameArea = $("#ContentPlaceHolder1_ddlGameArea");
    var ddlGameServer = $("#ContentPlaceHolder1_ddlGameServer");
    var hfSelectedGameServer = $("#ContentPlaceHolder1_hfSelectedGameServer");
    if (ddlGameArea.val() == "0") {
        $("#span_server")[0].innerHTML = "<span></span>��ѡ������Ϸ���ڵĴ�����";
        $("#span_server")[0].className = "form_error";
        return false;
    }
    else {
        $("#span_server")[0].innerHTML = "<span></span>��ȷ����ѡ�������ȷ��������";
        $("#span_server")[0].className = "form_error";
        return true;
    }
}
function doCheckLeaveGame() {
    if (doCheckGame()) {
        $("#span_server")[0].className = "form_right";
    }
}
//���ָ���������Ƿ������ҳ��,�������,�Ҿ��Զ�����Ч�ڸ��ĳ�30����

/**
function checkAppointPwd() {
    $('#youxiaoqi').hide();
    $('#infoData').text('��Ϣ����֮����Ч���ǣ�');
    $('#infoData').html($('#infoData').text() + '<span id="yxqx" name="youxiaoqi" value="30" style="color:#e18110;font-weight:bold;font-size:14px">30</span>' + '����');
}
*/

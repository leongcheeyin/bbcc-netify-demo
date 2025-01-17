// JScript 文件
$.ajaxSetup({ cache: false });
//个性注册用户名验证
function txtUser_blur() {
    var userID = document.getElementById("txtUserID").value;
    var chkDiv = document.getElementById("chkUserDiv");
    var re = /^[a-zA-Z_0-9]+$/;
    var isMobile = /^0?1[34578]\d{9}$/;
    var tmp = false;
    if (userID == null || userID == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入用户名";
    }
    else if (userID.length < 4 || userID.length > 20) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "4-20个字符,包括:字母、数字、下划线";
    }
    else if (!re.test(userID)) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "4-20个字符,包括:字母、数字、下划线";
    }
    else if (isMobile.test(userID)) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "非常抱歉，此用户名已被使用";
    }
    else {
        var result = getHttpRequestTxt("inc/checkUser.aspx?u=" + encodeURIComponent(userID));
        if (result == "1") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "非常抱歉，此用户名已被使用";
        }
        else {
            chkDiv.className = "right";
            chkDiv.innerHTML = "";
            tmp = true;
        }
    }
    if (tmp == true) {
        document.getElementById("userRight").value = "1";
    }
    else {
        document.getElementById("userRight").value = "0";
    }
}

//邮箱注册用户名验证
function e_Userblur() {
    var userID = document.getElementById("e_UserID").value;
    var chkDiv = document.getElementById("email_ChkUserDiv");
    var tmp = false;
    re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (userID == null || userID == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请填写您的电子邮箱！";
        return false;
    }
    else if (!re.test(userID)) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "邮件格式不正确！";
        return false;
    }
    else
    {
        var result = getHttpRequestTxt("inc/checkUser.aspx?u=" + encodeURIComponent(userID));
        if (result == "1") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "非常抱歉，此用户名已被使用";
            return false;
        }
        else {
            chkDiv.className = "right";
            chkDiv.innerHTML = "";
            tmp = true;
        }
    }
    if (tmp == true) {
        document.getElementById("userRight").value = "1";
    }
    else {
        document.getElementById("userRight").value = "0";
    }
    return true;
}
var currentMobile;
//手机注册用户名验证
function p_Userblur()
{
    var userID = document.getElementById("p_UserID").value;
    var chkDiv = document.getElementById("phone_ChkUserDiv");
    var isMobile = /^0?1[34578]\d{9}$/;
    var tmp = false;
    if (userID == null || userID == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入手机号码";
        return false;
    }
    else if (!isMobile.test(userID)) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "手机号格式错误！";
        return false;
    }
    else {
        var result = getHttpRequestTxt("inc/checkUser.aspx?u=" + encodeURIComponent(userID));
        if (result == "1") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "非常抱歉，此用户名已被使用";
            return false;
        }
        else {
            chkDiv.className = "right";
            chkDiv.innerHTML = "";
            tmp = true;
            var event = event || arguments.callee.caller.arguments[0];
            if (event != undefined && ((event.target && event.target.id == "p_UserID") || (event.srcElement && event.srcElement.id == "p_UserID"))) {
                if (currentMobile!="" && currentMobile != userID)
                    getSendCount(true);
            }
            currentMobile = userID;
        }
    }
    if (tmp == true) {
        document.getElementById("userRight").value = "1";
    }
    else {
        document.getElementById("userRight").value = "0";
    }
    return true;
}

//邮箱和手机验证码验证

function checkPAndECode(ctl,checkDiv)
{
    var code = ctl.value;
    var chkDiv = document.getElementById(checkDiv);
    if (code == null || code == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请填写您收到的验证码！";
        return false;
    }
    chkDiv.className = "right";
    return true;
}

var strHTML = "<span class=\"ie6png\" ></span>";
function txtPartnerUserblur()
{
    var strHTML = "<span class=\"ie6png\" ></span>";
    var userID = document.getElementById("txtUserID").value;
    var chkDiv = document.getElementById("chkUserDiv");
    var re= /^[a-zA-Z_0-9]+$/;
    var tmp = false;
    if(userID == null || userID == "")
    {
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "请输入用户名";        
    }
    else if(userID.length < 4 || userID.length > 20)
    {
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "4-20个字符,包括:字母、数字、下划线";
    }    
    else if(!re.test(userID))
    {
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "4-20个字符,包括:字母、数字、下划线";        
    }
    else
    {
        var result = getHttpRequestTxt("/inc/checkUser.aspx?u=" + encodeURIComponent(userID));
        if(result == "1")
        {
            chkDiv.className = "notic-2";
            chkDiv.innerHTML = strHTML + "非常抱歉，此用户名已被使用";        
        }
        else
        {
            chkDiv.className = "notic-3";
            chkDiv.innerHTML = strHTML + "";
            tmp = true;
        }
    }
    if(tmp == true)
    {
        document.getElementById("hiddUserRight").value = "1";
    }
    else
    {
        document.getElementById("hiddUserRight").value = "0";
    }
}


/*
 *partnerLogin.aspx的用户较验
 */
function txtLoginUser_blur() {
    var strHTML = "<span class=\"ie6png\" ></span>";
    var userID = document.getElementById("txtLoginUser").value;
    var chkDiv = document.getElementById("pLoginUser");
    var re = /^[a-zA-Z_0-9]+$/;
    var tmp = false;
    if (userID == null || userID == "") {
        chkDiv.style.display = "";
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "请输入用户名";
    }
    else {
        var result = getHttpRequestTxt("/inc/checkUser.aspx?p=1&u=" + encodeURIComponent(userID));
        if (result != "1") {
            chkDiv.style.display = "";
            chkDiv.className = "notic-2";
             chkDiv.innerHTML = strHTML + "您输入的用户名不存在";
        }
        else {
            chkDiv.className = "notic-3";
            chkDiv.innerHTML = strHTML + "";
            tmp = true;
        }
    }
    if (tmp == true) {
        document.getElementById("userRight").value = "1";
    }
    else {
        document.getElementById("userRight").value = "0";
    }
}

function checkPartnerForm(type) {

    if (type == "1") {
        var ctl = document.getElementById("userRight");
        if (ctl.value == "0") {
            alert("用户名不用存");
            return false;
        }
        var pwdCtl = document.getElementById("txtPwd");
        if (checkPartnerPwd(pwdCtl, 'chkPwdDiv') == false) {
            alert("请输入登录密码");
            return false;
        }
    }
    else {
        var ctl = document.getElementById("hiddUserRight");
        if (ctl.value == "0") {
            alert("用户名不正确，请重新输入");
            return false;
        }
        var emailCtl = document.getElementById("txtEmail");
        if (checkPartnerEmail(emailCtl, 'chkEmailDiv') == false) {
            alert("电子邮箱地址不正确");
            return false;
        }
    }
    var protocolCtl;
    if (type == "1") {
        protocolCtl = document.getElementById("chkUserProtocol2");
    }
    else {
        protocolCtl = document.getElementById("chkUserProtocol");
    }
    if (protocolCtl.checked == false) {
        alert("请先阅读并同意\"uu898用户服务协议\"");
        return false;
    }
    return true;
}
function checkPartnerEmail(emailCtl,chkDivId)
{
    var strHTML = "<span class=\"ie6png\" ></span>";
    var email = emailCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if(email == null || email == "")
    {
        chkDiv.style.display = "";
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "请填写正确的电子邮箱，很重要！";
        return false;
    }
    re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!re.test(email))
    {
        chkDiv.style.display = "";
        chkDiv.className = "notic-2";
         chkDiv.innerHTML = strHTML + "邮件格式不正确,请重新填写！";
        return false;
    }
    chkDiv.className = "notic-3";
    chkDiv.innerHTML = strHTML + "";
    return true;
}
function checkPartnerPwd(pwdCtl, chkDivId) {
    var strHTML = "<span class=\"ie6png\" ></span>";
    var pwd = pwdCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    var tmp = false;
    if (pwd == "") {
        chkDiv.style.display = "";
        chkDiv.className = "notic-2";
        chkDiv.innerHTML = strHTML + "请输入登录密码";
    }
    else {

        chkDiv.className = "notic-3";
        chkDiv.innerHTML = strHTML + "";
        tmp = true;
    }
    return tmp;
}
function ctl_focus(chkDivId,txt)
{

    document.getElementById(chkDivId).className = "inputing";
    document.getElementById(chkDivId).innerHTML = txt;
}
function ctlfocus(chkDivId, txt) {
    var strHTML = "<span class=\"ie6png\" ></span>";
    document.getElementById(chkDivId).innerHTML = strHTML + txt;
    document.getElementById(chkDivId).style.display = '';
    document.getElementById(chkDivId).className = "notic-1";
}
function checkPwd(pwdCtl,chkDivId)
{
    var pwd = pwdCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    var tmp = false;
    if(pwd == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入登录密码";        
    }
    else if(pwd.length < 6 || pwd.length > 20)
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "密码长度为6-20位，字母请区分大小写";       
    }
    else if (/^\d+$/.test(pwd) && pwd.length<10) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "您的密码设置的过于简单，请重新设置您的密码";
    }
    else
    {
        chkDiv.className = "right";
        chkDiv.innerHTML = "";
        tmp = true;
    }
    return tmp;
}

function checkPwdR(pwdrCtl,chkDivId)
{
    var pwd = document.getElementById("txtPwd").value;
    var pwdR = pwdrCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if(pwdR == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请再次输入登录密码";
        return true;
    }
    else if (pwd == pwdR)
    {
        chkDiv.className = "right";
        chkDiv.innerHTML = "";
        return true;
    }
    else
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "两次输入的登录密码不一致";
        return false;
    }
}
function e_CheckPwdR(pwdrCtl, chkDivId) {
    var e_pwd = document.getElementById("e_pwd").value;
    var pwdR = pwdrCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if (pwdR == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请再次输入登录密码";
        return false;
    }
    else if (e_pwd == pwdR) {
        chkDiv.className = "right";
        chkDiv.innerHTML = "";
        return true;
    }
    else {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "两次输入的登录密码不一致";
        return false;
    }
}
function p_CheckPwdR(pwdrCtl, chkDivId) {
    var p_pwd = document.getElementById("p_pwd").value;
    var pwdR = pwdrCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if (pwdR == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请再次输入登录密码";
        return true;
    }
    else if (p_pwd == pwdR) {
        chkDiv.className = "right";
        chkDiv.innerHTML = "";
        return true;
    }
    else {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "两次输入的登录密码不一致";
        return false;
    }
}

function checkCode(codeCtl, chkDivId) {
    var code = codeCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    var tmp = false;
    if (code == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入验证码";
    }
    else if (code.length != 4) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "验证码长度为4位";
    }
    else {
        chkDiv.className = "right";
        chkDiv.innerHTML = "";
        tmp = true;
    }
    return tmp;
}

//验证登录页面输入的内容
function checkForm()
{
    var ctl = document.getElementById("userRight");
    if(ctl.value == "0")
    {
        alert("用户名不正确，请重新输入");
        return false;
    }
    ctl = document.getElementById("txtPwd");
    if(checkPwd(ctl,'chkPwdDiv') == false)
    {
        alert("请输入登录密码");        
        return false;
    }
    ctl = document.getElementById("txtPwdR");
    if(checkPwdR(ctl,'chkPwdRDiv') == false)
    {
        alert("请再次输入登录密码");
        return false;
    }    
    ctl = document.getElementById("txtEmail");
    if(checkEmail(ctl,'chkEmailDiv') == false)
    {
        alert("电子邮箱地址不正确");        
        return false;
    }
    ctl = document.getElementById("chkUserProtocol");
    if(ctl.checked == false)
    {
        alert("请先阅读并同意\"uu898用户服务协议\"");
        return false;
    }
    return true;
}
//密码强度
function checkPwdStrength(pwdCtl,preStr)
{
    var pwd = pwdCtl.value;
    var a = document.getElementById(preStr + "_a");
    var b = document.getElementById(preStr + "_b");
    var t = document.getElementById(preStr + "_t");
    if(pwd.length > 0)
    {
        a.className ="mima_length show";
    }
    else
    {
        a.className ="mima_length hidde";
    }
    
    var lv = 0;
    if (pwd.match(/[a-z]/ig)){lv++;}
    if (pwd.match(/[0-9]/ig)){lv++;}
    if (pwd.match(/[^a-z0-9]/ig)){lv++;}
    if (pwd.length < 6 && lv > 1){lv--;}
    switch(lv)
    {                               
    case 1:
        b.className ="mima_1";
        t.innerHTML = "弱"
        break;
    case 2:
        b.className ="mima_2";
        t.innerHTML = "中";
        break;
    case 3:
        b.className ="mima_3";
        t.innerHTML = "强";
        break;
    default:
        b.className ="mima_1";
        t.innerHTML = "弱"
  }
}
//邮箱验证
function checkEmail(emailCtl,chkDivId)
{
    var email = emailCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if(email == null || email == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请填写正确的电子邮箱，在找回密码时电子邮箱的正确与否很重要！";
        return false;
    }
    re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!re.test(email))
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "邮件格式不正确！请填写正确的电子邮箱，在找回密码时电子邮箱的正确与否很重要！";
        return false;
    }
    
    chkDiv.className = "right";   
    return true;
}


function optionalCtl_blur(chkDivId)
{
    document.getElementById(chkDivId).className = "wait";  
}
function checkPayPwd(pwdCtl,chkDivId)
{
    var pwd = pwdCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    var tmp = false;
    if(pwd == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入支付密码";        
    }
    else if(pwd.length < 6 || pwd.length > 20)
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "密码长度为6-20位，字母请区分大小写";       
    }
    else
    {
        chkDiv.className = "right";
        chkDiv.innerHTML = "密码长度为6-20位，字母请区分大小写";
        tmp = true;
    }
    return tmp;
}
function checkPayPwdR(pwdrCtl,chkDivId)
{
    var pwd = document.getElementById("txtPayPwd").value;
    var pwdR = pwdrCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if (pwdR != "") {
        if (pwd != pwdR) {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "两次输入的支付密码不一致";
            return false;
        }
        else {
            chkDiv.className = "right";
            return true;
        }
    }
    else {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请再次输入支付密码";
        return false;
    }
   
}
//验证固定电话
function CheckTel(TelCtl, chkDivId) {
    var TelNumber = TelCtl.value;
    var chkTelNumber = document.getElementById(chkDivId);
    if (TelNumber == "") {
        if (document.getElementById('txtMobile').value != "") {
            chkTelNumber.className = "right";
            chkTelNumber.innerHTML = "请输入固定电话";
            return true;
        }
        else {
            chkTelNumber.className = "wrong";
            chkTelNumber.innerHTML = "手机号和固定电话必须填写一个";
            return false;
        }
    }
    else if (TelNumber.length != 11 && TelNumber.length != 12) {
        chkTelNumber.className = "wrong";
        chkTelNumber.innerHTML = "请正确输入11或12位固定电话号码";
        return false;
    } else {
        var regRule = /^((\(\d{3}\))|(\d{3}\-))?0[1-9][0-9]\d{8}|0[1-9][0-9]\d{9}$/;
        var chkReg = new RegExp(regRule);
        if (!chkReg.test(TelNumber)) {
            chkTelNumber.className = "wrong";
            chkTelNumber.innerHTML = "请正确输入您的固定电话";
            return false;
        } else {
            chkTelNumber.className = "right";
            chkTelNumber.innerHTML = "请输入固定电话";
            return true;
        }
    }
}
//验证手机号
function checkMobile(mobileCtl,chkDivId)
{
    var mobile = mobileCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if(mobile == null)
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入手机号码";
        return false;
    }
    if (mobile == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请输入手机号码";
        return true;
    }

    var isMobile = /^0?1[34578]\d{9}$/;
    if (!isMobile.test(mobile))
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "您输入的手机号码不正确，请重新填写！";
        return false;
    }
    
    chkDiv.className = "right";   
    return true;
}
//校验QQ号码
function checkQQ(txtQQ,chkDivId)
{
   var QQnumber=txtQQ.value;
   var pattern = /^\d+(\.d+)?$/;
   var chkDiv=document.getElementById(chkDivId);
   if(QQnumber=="")
   {
       chkDiv.className = "wrong";
        chkDiv.innerHTML = "请您输入QQ号码！";
        return false;
   }
   if(!pattern.test(QQnumber) || !(QQnumber.length>4 && QQnumber.length<14))
   {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "QQ号码格式或位数不正确，请重新输入！";
        return false;
   }
    chkDiv.className = "right"; 
    return true;
}
//校验验证码
function chkCode(txtCode, chkDivId) {
    var Code = txtCode.value;
    var chkDiv = document.getElementById(chkDivId);
    if (Code == "") {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请您收到的验证码！";
        return false;
    }
    if (Code.length !=6) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "验证码位数不正确，请重新输入！";
        return false;
    }
    chkDiv.className = "right";
    return true;
}
function checkAccountName(nameCtl,chkDivId)
{
    var name = nameCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    if(name == null || name == "" || name.length < 2 || name == encodeURIComponent(name))
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "为保证您的资金安全，请如实填写，填写以后将不能更改";
        return false;
    }
    chkDiv.className = "right";
    chkDiv.innerHTML = "为保证您的资金安全，请如实填写，填写以后将不能更改";
    return true;
}

//校验银行卡号
function checkCardNumber(txtAccount, chkDivId) {
    txtAccount.value = txtAccount.value.replace(/\s+/g, "")//去除空格
    var CardNumber = txtAccount.value;
    var chkDiv = document.getElementById(chkDivId);
    var pattern = /^\d+(\.d+)?$/;
    if (CardNumber == "") {
        chkDiv.className = "wait";
        chkDiv.innerHTML = "请填写您的银行卡号（如果卡号和户名不符，无法提现转账成功）";
        return true;
    }
    if (!pattern.test(CardNumber) || !(CardNumber.length >= 12 && CardNumber.length <= 19)) {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "银行卡号格式或位数不正确，请重新输入！";
        return false;
    }
    chkDiv.className = "right";
    return true;
}

//验证身份证号码
function checkCredit(creditCtl,chkDivId)
{
    var credit = creditCtl.value;
    var chkDiv = document.getElementById(chkDivId);
    
    if(credit == null || credit == "")
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请如实填写身份证号码，填写以后将不可更改";
        return false;
    }
    
    if(checkCreditValue(credit) == false)
    {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "您输入的身份证号码格式不正确，请重新填写！";
        return false;
    }
    chkDiv.className = "right";   
    return true;
}

//校验身份证号码   
function checkCreditValue(idCard)
{   
    var id=idCard;   
    var id_length=id.length;   
  
    if (id_length==0)
    {
        return false;
    }
  
    if (id_length!=15 && id_length!=18)
    {   
        return false;
    }   
  
    if (id_length==15)
    {   
        yyyy="19"+id.substring(6,8);   
        mm=id.substring(8,10);   
        dd=id.substring(10,12);   
  
        if (mm>12 || mm<=0)
        {               
            return false;   
        }   
  
        if (dd>31 || dd<=0)
        {   
            return false;   
        }   
  
        birthday=yyyy+ "-" +mm+ "-" +dd;   
  
        if ("13579".indexOf(id.substring(14,15))!=-1)
        {   
            sex="1";   
        }
        else
        {   
            sex="2";   
        }   
    }
    else if (id_length==18)
    {   
        if (id.indexOf("X") > 0 && id.indexOf("X")!=17 || id.indexOf("x")>0 && id.indexOf("x")!=17)
        {               
            return false;   
        }   
  
        yyyy=id.substring(6,10);   
        if (yyyy>2200 || yyyy<1930)
        {
            return false;   
        }   
  
        mm=id.substring(10,12);   
        if (mm>12 || mm<=0)
        {
            return false;   
        }   
  
        dd=id.substring(12,14);   
        if (dd>31 || dd<=0)
        {
            return false;   
        }   
  
        if (id.charAt(17)=="x" || id.charAt(17)=="X")   
        {   
            if ("x"!=GetVerifyBit(id) && "X"!=GetVerifyBit(id))
            { 
                return false;   
            }   
  
        }
        else
        {   
            if (id.charAt(17)!=GetVerifyBit(id))
            { 
                return false;   
            }   
        }   
  
        birthday=id.substring(6,10) + "-" + id.substring(10,12) + "-" + id.substring(12,14);   
        if ("13579".indexOf(id.substring(16,17)) > -1)
        {   
            sex="1";   
        }
        else
        {   
            sex="2";   
        }   
    }   
  
    return true;   
}
//15位转18位中,计算校验位即最后一位   
function GetVerifyBit(id){   
    var result;   
    var nNum=eval(id.charAt(0)*7+id.charAt(1)*9+id.charAt(2)*10+id.charAt(3)*5+id.charAt(4)*8+id.charAt(5)*4+id.charAt(6)*2+id.charAt(7)*1+id.charAt(8)*6+id.charAt(9)*3+id.charAt(10)*7+id.charAt(11)*9+id.charAt(12)*10+id.charAt(13)*5+id.charAt(14)*8+id.charAt(15)*4+id.charAt(16)*2);   
    nNum=nNum%11;   
    switch (nNum) {   
       case 0 :   
          result="1";   
          break;   
       case 1 :   
          result="0";   
          break;   
       case 2 :   
          result="X";   
          break;   
       case 3 :   
          result="9";   
          break;   
       case 4 :   
          result="8";   
          break;   
       case 5 :   
          result="7";   
          break;   
       case 6 :   
          result="6";   
          break;   
       case 7 :   
          result="5";   
          break;   
       case 8 :   
          result="4";   
          break;   
       case 9 :   
          result="3";   
          break;   
       case 10 :   
          result="2";   
          break;   
    }   
    //document.write(result);   
    return result;   
}  
//邮箱列表    
var mail_fix = ["qq.com", "163.com", "126.com", "sina.com", "vip.qq.com", "yahoo.com.cn","yahoo.cn", "hotmail.com", "sohu.com", "21cn.com"];//Email后缀
function EmailList(etl, email) {
    var mail_list = document.getElementById(etl);
    var mail_text = document.getElementById(email);
    mail_text.onkeyup = function (e) {
        var v = mail_text.value;
        var list_html = '<h3 style="color:#5bf;position:relative;">\u8bf7\u9009\u62e9\u90ae\u7bb1\u540e\u7f00<span id="addClose" onclick=" document.getElementById(\'' + etl + '\').style.display=\'none\';" style="z-index:999;position:absolute;top:0px;right:10px; cursor: pointer;">X</span></h1>';
        var x = 0;
        var m = false;
        if (v.length > 0) {
            list_html += "<a href='javascript:;' onclick='javascript:Select(\"" + v + "\",\"" + etl + "\",\"" + email + "\");'>" + v + "</a>"

            for (var i = 0; i < mail_fix.length; i++) {
                if (v.indexOf("@") < 0) {
                    x++;
                    list_html += "<a href='javascript:;' onclick='javascript:Select( \"" + v + "@" + mail_fix[i] + "\",\"" + etl + "\",\"" + email + "\");'>" + v + "@" + mail_fix[i] + "</a>";
                }
                else {
                    var mail_a = v.split("@");
                    if (mail_fix[i].indexOf(mail_a[1]) == 0) {
                        x++;
                        list_html += "<a href='javascript:;' onclick='javascript:Select(\"" + mail_a[0] + "@" + mail_fix[i] + "\",\"" + etl + "\",\"" + email + "\");'>" + mail_a[0] + "@" + mail_fix[i] + "</a>";
                        if (mail_fix[i] == mail_a[1]) m = true;
                    }

                }
            }
            mail_list.style.display = "";
            mail_list.innerHTML = list_html;
            if (x == 0 || (x == 1 && m)) {
                mail_list.style.display = 'none';
            }
        }
        else {
            mail_list.style.display = 'none';
        }
    }
}
function Select(value,e,t_mail){
    document.getElementById(e).style.display='none';
    var a = document.getElementById(t_mail);
    a.value= value;
    a.focus();
    a.blur();
}
//校验邮箱验证码
//function e_CheckCode()
//{
//    var userID = document.getElementById("e_UserID").value;
//    var code = document.getElementById("e_Code").value;
//    var chkDiv = document.getElementById("email_ChkCodeDiv");
//    if (code != null && code != "") {
//        chkDiv.className = "right";
//        chkDiv.innerHTML = "";
//        return true;
//    }
//    else {
//        chkDiv.className = "wrong";
//        chkDiv.innerHTML = "请填写您收到的验证码！";
//        return false;
//    }
//}
//校验手机验证码
function p_CheckCode()
{
    var userID = document.getElementById("p_UserID").value;
    var code = document.getElementById("p_Code").value;
    var chkDiv = document.getElementById("phone_ChkCodeDiv");
    var imgCode = $("#phone_txtCheckCode").val();
    if (code != null && code != "") {
        var result = getHttpRequestTxt("inc/checkUserCode.aspx?u=" + encodeURIComponent(userID) + "&c=" + encodeURIComponent(code) + "&t=" + encodeURIComponent("2") + "&i=" + encodeURIComponent(imgCode));
        if (result == "0") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "手机验证码不正确，请重新输入！";
            return false;
        }
        else if (result == "2") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "手机验证码错误次数过多！";
            return false;
        }
        else if (result == "-10") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "验证码错误，请重新输入！";
            return false;
        }
        else if (result == "-11") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "验证码过期，请刷新重试！";
            return false;
        }
        else if (result == "-12") {
            chkDiv.className = "wrong";
            chkDiv.innerHTML = "系统错误，请稍后重试！";
            return false;
        }
        else {
            chkDiv.className = "right";
            chkDiv.innerHTML = "";
            return true;
        }
    }
    else {
        chkDiv.className = "wrong";
        chkDiv.innerHTML = "请填写您收到的验证码！";
        return false;
    }
}

//获取邮箱验证码
$(function () {
    $("#send_EmailCode").click(function () {
        if (e_Userblur() == false) {
            alert('请您检查邮箱是否正确！');
            return false;
        }
        var email = $("#e_UserID").val();
        if (email != null && email != "") {
            $.get("/ashx/UserRegister.ashx?action=mailSend", "&email=" + email + "&uID=" + email + "&type=" + "6", function (emailResult) {
                if (emailResult != null && emailResult != "") {
                    if (emailResult == "1" || emailResult == "2" || emailResult == "3") {
                        var count = 60;
                        var countdown = setInterval(
                        function () {
                            $("#send_EmailCode").attr("disabled", true);
                            $("#send_EmailCode").val("重新获取(" + count + ")");
                            if (count == 0) {
                                $("#send_EmailCode").val("重新获取").removeAttr("disabled");
                                clearInterval(countdown);
                            }
                            count--;
                        }, 1000);
                        alert('发送成功！');
                    }
                    else {
                        alert('安全码已发3次请到邮箱查收!');
                        $("#send_EmailCode").val('安全码已发3次请到邮箱查收');
                        $("#send_EmailCode").attr("disabled", "disabled");
                        return false;
                    }
                }
            });
        } else {
            alert('请填写您的邮箱！');
            return false;
        }
    });
});
//获取手机验证码
$(function () {
    $("#send_PhoneCode").click(function () {
      
        if (p_Userblur() == false) {
            alert('请您检查手机号码是否正确！');
            return false;
        }
        var uID = document.getElementById("p_UserID").value;
        
        var imgCode = $("#phone_txtCheckCode").val();
        if (uID != null && uID != "") {
            $.get("/ashx/UserRegister.ashx?action=sendPhoneCode_bm", "&uID=" + uID + "&phoneNo=" + uID + "&type=" + "4" + "&sign=" + "p_Sign" + "&i=" + imgCode, function (sendResult) {
                if (sendResult != null && sendResult != "") {
                    if (sendResult == "x") {
                        //发送最大次数
                        alert('发送次数超过限制，请查看手机收到的验证码！');
                        //$("#send_PhoneCode").val('超过限制');
                        $("#send_PhoneCode").unbind('click');
                        $("#send_PhoneCode")[0].onclick = null;
                        $("#send_PhoneCode").click(function () { alert('发送次数超过限制，请查看手机收到的验证码！'); NtalkerKefu() });
                        NtalkerKefu();
                        return false;
                    } else if (sendResult.match(/0\|\d/)) {
                        //成功
                        var count = 60;
                        var sendCount = sendResult.match(/0\|(\d)/)[1];
                        var isUseVoiceSecurityCode = $("#hidIsUseVoiceSecurityCode").val();
                        var countdown = setInterval(
                        function () {
                            $("#send_PhoneCode").attr("disabled", true);
                            $("#send_PhoneCode").val("重新发送(" + count + ")");
                            $("#btnSendVoice").hide();
                            if (count == 0) {                                                                                               
                                    if (sendCount == 1) {
                                        if (isUseVoiceSecurityCode == "1") {
                                            $("#send_PhoneCode").hide();
                                            $("#btnSendVoice").show();
                                            $("#btnSendVoice").unbind('click');
                                            $("#btnSendVoice")[0].onclick = function () { sendMobileVoice('p_UserID'); }
                                            $('#msgtip a').removeAttr("disabled");
                                            $('#msgtip a').click(function () { sendMobileVoice('p_UserID') });
                                        }
                                        else {
                                            $("#send_PhoneCode").val("重新发送").removeAttr("disabled");
                                        }
                                    }
                                    else if (sendCount > 1) {
                                        $("#send_PhoneCode").val("发送短信验证码").removeAttr("disabled");
                                        $("#btnSendVoice").show();
                                        $("#btnSendVoice").unbind('click');
                                        $("#btnSendVoice")[0].onclick = function () { sendMobileVoice('p_UserID'); }
                                        $('#msgtip a').removeAttr("disabled");
                                        $('#msgtip a').click(function () { sendMobileVoice('p_UserID') });
                                    }
                                
                                clearInterval(countdown);
                            }
                            count--;
                        }, 1000);
                        if (isUseVoiceSecurityCode == "1" && sendCount == 1)
                            $('#msgtip').html("<span class=\"poptip-arrow poptip-arrow-bottom\"></span>手机验证码已经成功通过短信方式发送到您的手机，请您注意查收。总是收不到短信？你也可以直接试试<a href='javascript:void(0)' disabled='disabled'>语音验证码》》</a>").show();
                        else 
                            $('#msgtip').html("<span class=\"poptip-arrow poptip-arrow-bottom\"></span>手机验证码已经成功通过短信方式发送到您的手机，请您注意查收！").show();
                        alert('发送成功！');
                    } else if (sendResult == "-1") {
                        alert('您的手机号在黑名单中,不能注册！');
                        return false;
                    } else if (sendResult == "-2") {
                        alert('您的手机号被禁用,不能注册！');
                        return false;
                    } else if (sendResult == "-3") {
                        alert("您的验证码不正确，不能注册！");
                        return false;
                    }  else if (sendResult == "-11") {
                        alert('您的验证码过期，不能注册！');
                        return false;
                    }
                    else if (sendResult == "-12") {
                        alert('系统繁忙，不能注册！');
                        return false;
                    }
                    else {
                        //失败
                        alert("发送失败,请重试！");
                        return false;
                    }
                }
            });
        } else {
            alert('您的手机号码为空！');
            return false;
        }
    });
});
//获取语音验证码
function sendMobileVoice(mobileID) {
    var mobileNumber = $("#" + mobileID);
    var imgCode = $("#phone_txtCheckCode").val();
    if (p_Userblur() == false) {
        alert('请您检查手机号码是否正确！');
        return false;
    }
    $.get("/ashx/UserRegister.ashx?action=sendMobileVoice", "&phoneNo=" + mobileNumber.val() + "&uID=" + mobileNumber.val() + "&type=4&i=" + imgCode, function (sendResult) {
        if (sendResult == "x") {
            //发送最大次数
            alert('发送次数超过限制！');
            //$("#btnSendVoice").val('超过限制');
            //$("#btnSendVoice").attr("disabled", "disabled");
            $("#btnSendVoice").unbind('click');
            $("#btnSendVoice")[0].onclick = null;
            $("#btnSendVoice").click(function () { alert('发送次数超过限制！'); NtalkerKefu() });
            NtalkerKefu();
            return false;
        } else if (sendResult == "0") {
            //成功
            var count = 60;
            var countdown = setInterval(
            function () {
                $("#btnSendVoice").attr("disabled", true);
                $("#btnSendVoice").val("重新发送(" + count + ")");
                $("#send_PhoneCode").hide();
                if (count == 0) {
                    $("#btnSendVoice").val("发送语音验证码").removeAttr("disabled");
                    $("#send_PhoneCode").val("发送短信验证码").removeAttr("disabled").show();
                    clearInterval(countdown);
                }
                count--;
            }, 1000);
            $('#msgtip').html("<span class=\"poptip-arrow poptip-arrow-bottom\"><em>◆</em><i>◆</i></span>您的手机将接收到固定电话的呼叫，接通后将自动播报您的验证码，请注意接听。").show();
            alert('发送成功！');
        } else if (sendResult == "-1") {
            alert('您的手机号在黑名单中，不能绑定！');
            return false;
        } else if (sendResult == "-2") {
            alert('您的手机号已经被禁用，不能绑定！');
            return false;
        }else if (sendResult == "-3") {
            alert('您的手机号已经被禁用，不能绑定！');
            return false;
        }
        else if (sendResult == "-11") {
            alert('验证码过期，请刷新重试！');
            return false;
        }
        else if (sendResult == "-10") {
            alert('系统繁忙，请稍后重试！');
            return false;
        }
        else if (sendResult == "-4") {
            $("#send_PhoneCode").show();
            $("#btnSendVoice").hide();
            return false;
        } else {
            //失败
            alert("发送失败,请重试！");
            return false;
        }
    });
    return false;
}
//提交验证
$(function () {
    $("#btn_EmailSubmit").click(function () {
        var ctl = document.getElementById("e_UserID");
        if (ctl.disabled == false && ctl.value == "") {
            alert("请输入您的电子邮箱！");
            ctl.focus();
            return false;
        }
        if (e_Userblur() == false)
        {
            alert("请您按要求输入电子邮箱！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("e_pwd");
        if (ctl.value == "")
        {
            alert("请输入您的密码！");
            ctl.focus();
            return false;
        }
        if (checkPwd(ctl, 'email_ChkPwdDiv')==false)
        {
            alert("请您按要求设置密码！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("e_pwd1");
        if (ctl.value == "")
        {
            alert("请再次输入您的密码！");
            ctl.focus();
            return false;
        }
        if (e_CheckPwdR(ctl,'email_ChkPwdRDiv')==false)
        {
            alert("请您检查再次输入的密码！");
            ctl.focus();
            return false;
        }
    });

    $("#btn_PhoneSubmit").click(function () {
        var ctl = document.getElementById("p_UserID");
        if (ctl.value == "")
        {
            alert("请输入手机号码！");
            ctl.focus();
            return false;
        }
        if (p_Userblur() == false)
        {
            alert("请按要求输入您的手机号码！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("p_pwd");
        if (ctl.value == "") {
            alert("请输入您的密码！");
            ctl.focus();
            return false;
        }
        if (checkPwd(ctl, 'phone_ChkPwdDiv') == false) {
            alert("请您按要求设置密码！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("p_pwd1");
        if (ctl.value == "") {
            alert("请再次输入您的密码！");
            ctl.focus();
            return false;
        }
        if (p_CheckPwdR(ctl, 'phone_ChkPwdRDiv') == false) {
            alert("请您检查再次输入的密码！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("p_Code");
        if (ctl.value == "") {
            alert("请输入您收到的验证码！");
            ctl.focus();
            return false;
        }
        if (p_CheckCode() == false)
        {
            alert("请您检查验证码是否正确！");
            ctl.focus();
            return false;
        }

    });
    $("#btnSubmit").click(function () {
        var ctl = document.getElementById("txtUserID");
        if (ctl.value == "") {
            alert("请输入用户名！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("txtPwd");
        if (ctl.value == "") {
            alert("请输入您的密码！");
            ctl.focus();
            return false;
        }
        if (checkPwd(ctl, 'chkPwdDiv') == false) {
            alert("请您按要求设置密码！");
            ctl.focus();
            return false;
        }
        var ctl = document.getElementById("txtPwdR");
        if (ctl.value == "") {
            alert("请再次输入您的密码！");
            ctl.focus();
            return false;
        }
        if (checkPwdR(ctl, 'chkPwdRDiv') == false) {
            alert("请您检查再次输入的密码！");
            ctl.focus();
            return false;
        }
        
    });
});

function getSendCount(dovali)
{
    if (!dovali && p_Userblur() == false)
        return;
    var uID = document.getElementById("p_UserID").value;
    var imgCode = $("#phone_txtCheckCode").val();
    if (imgCode == "")
        return;
    //$("#send_PhoneCode").hide();
    //$("#btnSendVoice").show();
    //$("#btnSendVoice").unbind('click');
    //$("#btnSendVoice")[0].onclick = function () { sendMobileVoice('p_UserID'); }
    $.get("/ashx/UserRegister.ashx?action=getSendCount", "&uID=" + uID + "&phoneNo=" + uID + "&type=" + "4" + "&sign=" + "p_Sign" + "&i=" + imgCode, function (result) {
        if (result != null && result != "")
        {
            if (!isNaN(result) && parseInt(result) >= 1) {
                //$('#msgtip').text("手机验证码已经成功通过短信方式发送到您的手机，请您注意查收！").show();
                $("#send_PhoneCode").show();
                $("#btnSendVoice").show();
                $("#btnSendVoice").unbind('click');
                $("#btnSendVoice")[0].onclick = function () { sendMobileVoice('p_UserID'); }
            }
            else {                
                $("#btnSendVoice").show();
                $("#btnSendVoice").unbind('click');
                $("#btnSendVoice")[0].onclick = function () { sendMobileVoice('p_UserID'); }
                $("#send_PhoneCode").hide();
            }
        }
    });
}



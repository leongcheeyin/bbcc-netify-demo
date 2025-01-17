// JScript 文件

//调用文件获取游戏区服列表
var url = "/"

function getHttpRequestData(requestUrl) {
    var iex = new Array("Msxml2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP4", "Microsoft.XMLHTTP");
    var oHttpReq;
    var oDoc;
    for (var i = 0; i < iex.length; i++) {
        try {
            oHttpReq = new ActiveXObject(iex[i]);
            oHttpReq.open("post", requestUrl, false);
            oHttpReq.send("");
            var result = oHttpReq.responseText;
            oDoc = new ActiveXObject("MSXML2.DOMDocument");    //响应结果
            oDoc.loadXML(result);
            break;
        }
        catch (err) {
            oHttpReq = null;
        }
    }

    if (!oHttpReq && typeof (XMLHttpRequest) != "undefined") {
        oHttpReq = new XMLHttpRequest(); //ff只支持这个
        oHttpReq.open("post", requestUrl, false);
        oHttpReq.send("");
        var result = oHttpReq.responseText;
        oDoc = (new DOMParser()).parseFromString(result, 'text/xml');
    }
    return oDoc;
}

function getHttpRequestTxt(requestUrl) {
    var iex = new Array("Msxml2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP4", "Microsoft.XMLHTTP");
    var oHttpReq;
    var result;
    for (var i = 0; i < iex.length; i++) {
        try {
            oHttpReq = new ActiveXObject(iex[i]);
            oHttpReq.open("post", requestUrl, false);
            oHttpReq.send("");
            result = oHttpReq.responseText;
            break;
        }
        catch (err) {
            oHttpReq = null;
        }
    }

    if (!oHttpReq && typeof (XMLHttpRequest) != "undefined") {
        oHttpReq = new XMLHttpRequest(); //ff只支持这个
        oHttpReq.open("post", requestUrl, false);
        oHttpReq.send("");
        result = oHttpReq.responseText;
    }
    return result;
}

function loadXMLByText(xmlText) {
    if (xmlText == null || xmlText == "") {
        return getHttpRequestData("http://www.uu898.com/static/inc/gameserver.html")
    }
    var oDoc;
    try {
        xmlText = xmlText.substring(xmlText.indexOf('<'));
        oDoc = new ActiveXObject("MSXML2.DOMDocument");    //响应结果
        oDoc.loadXML(xmlText);
    } catch (e) {
        oDoc = (new DOMParser()).parseFromString(xmlText, 'text/xml');
    }

    return oDoc;
}

/// <summary>
/// Desc:手机号码充值，JS校验与获取
/// Data:2012-6-29
/// Author:XIHONGLEI
/// </summary>

//校验手机号码格式
function checkPhone(phone) {
    var regex = /^1[34578]\d{9}$/;
    if (regex.test(phone)) {
        return true;
    }
    else {
        return false;
    }
}

//校验QQ号码格式
function isQQ(qq) {
    var regex = /^[1-9]\d{4,10}$/;
    if (regex.test(qq)) {
        return true;
    }
    else {
        return false;
    }
}
//校验手机号码输入框输入的格式，禁止输入字母
//id:控件的ID，msgId:当手机号码输入格多不正确的时候显示的ID，trueId:当正确的时候显示归属地信息
function checkInputting(id, msgId, trueId) {
    var input = document.getElementById(id);
    input.value = input.value.replace(/[^0-9]*/g, "");
    var value = trim(input.value);
    if (value.length <= 0) {
        document.getElementById(msgId).style.display = "none";
        document.getElementById(trueId).style.display = "none";
        return false;
    }
    if (!checkPhone(value)) {
        if (document.getElementById("rdoll") && document.getElementById("rdoll").checked) {
            document.getElementById(msgId).style.display = "none";
            document.getElementById(trueId).style.display = "none";
            alert("请输入正确的手机号码！");
        }
        else {
            document.getElementById(msgId).style.display = "";
            document.getElementById(trueId).style.display = "none";
        }
        return false;
    }
    document.getElementById(msgId).style.display = "none";
    document.getElementById(trueId).style.display = "none";
    return true;
}

//QQ专区校验输入
function checkInputQQ(id, msgId) {
    var input = document.getElementById(id);
    input.value = input.value.replace(/[^0-9]*/g, "");
    var value = trim(input.value);
    if (value.length <= 0) {
        document.getElementById(msgId).style.display = "none";
        return false;
    }
    if (!isQQ(value)) {
        document.getElementById(msgId).style.display = "";
        return false;
    }
    document.getElementById(msgId).style.display = "none";
    return true;
}

//去掉字符串两端的空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//加载用手机号的区服信息与对应的商品实际价格
function getRegionAndInPrice(phoneId, priceId, hiddId) {
    var phone = document.getElementById(phoneId).value;
    var select = document.getElementById(priceId);
    var price = select.options[select.selectedIndex].value;
    var requestText = getHttpRequestTxt("/PhoneRecharge/getRegionAndPirce.ashx?n=" + phone + "&p=" + price);
    if (requestText != "") {
        //hejiuxia 2013-6-27 add 处理异常，如果有异常充值不了，就提示给用户
        if (requestText.substr(0, 2) == "no") {
            document.getElementById("ShowPrice_Phone").style.display = "none";
            document.getElementById("dlWrongPrice_Phone").style.display = "";
            document.getElementById("lit_message_Phone").innerHTML = requestText.substr(3, requestText.length);
            document.getElementById(hiddId).value = -2;
        } else {
            if (requestText.indexOf('|') > -1) {
                var array = requestText.split('|');
                //显示号码归属地
                document.getElementById("dlRegion_Phone").style.display = "";
                document.getElementById("ddRegion_Phone").innerHTML = array[0];

                if (array[2] == "-2") {
                    document.getElementById("ShowPrice_Phone").style.display = "none";
                    document.getElementById("dlWrongPrice_Phone").style.display = "";
                    document.getElementById("lit_message_Phone").innerHTML = array[1];
                } else {
                    //显示实际价格
                    document.getElementById("ShowPrice_Phone").style.display = "";
                    document.getElementById("dlWrongPrice_Phone").style.display = "none";
                    document.getElementById("lit_price_Phone").innerHTML = array[1];
                }
                document.getElementById(hiddId).value = array[2];
            }
        }
    }
}
//加载用QQ业务对应的商品实际价格
function getQQInPrice(selectId, hiddId) {
    var select = document.getElementById(selectId);
    var card = select.options[select.selectedIndex].value;
    var requestText = getHttpRequestTxt("/PhoneRecharge/getQQInPriceByCardId.ashx?c=" + card);
    if (requestText != "") {
    //hejiuxia 2013-6-27 add 处理异常，如果有异常充值不了，就提示给用户
        if (requestText.substr(0, 2) == "no") {
            document.getElementById("ShowPrice_QQ").style.display = "none";
            document.getElementById("dlWrongPrice_QQ").style.display = "";
            document.getElementById("lit_message_QQ").innerHTML = requestText.substr(3, requestText.length);
            document.getElementById(hiddId).value = -2;
        } else {
            if (requestText.indexOf('|') > -1) {
                var array = requestText.split('|');
                if (array[1] == "-1") {
                    //显示错误提示
                    document.getElementById("ShowPrice_QQ").style.display = "none";
                    document.getElementById("dlWrongPrice_QQ").style.display = "";
                    document.getElementById("lit_message_QQ").innerHTML = array[0];
                }
                else {
                    //显示实际价格
                    document.getElementById("ShowPrice_QQ").style.display = "";
                    document.getElementById("dlWrongPrice_QQ").style.display = "none";
                    document.getElementById("lit_price_QQ").innerHTML = array[0];
                    if (card == "220612") {

                        document.getElementById("spanUnit").innerHTML = "元/个";
                        document.getElementById("dlTime").style.display = "none";
                        document.getElementById("dlCount").style.display = "";
                    }
                    else {
                        document.getElementById("spanUnit").innerHTML = "元/月";
                        document.getElementById("dlCount").style.display = "none";
                        document.getElementById("dlTime").style.display = "";
                    }
                }
                document.getElementById(hiddId).value = array[1];
            }
        }
    }
}
//校验输入
function checkForm(hiddId,type) {
    var code = document.getElementById(hiddId).value;
    var Suffix = "_Phone"
    if (type == 2) Suffix = "_QQ";
    if (code == "1") {
        return true;
    }
    else if (code == "-1" && type == 1) {
        var str = document.getElementById("ddRegion" + Suffix).innerHTML;
        alert(str);
        return false;
    }
    else if (code == "-2") {
        var str = document.getElementById("lit_message" + Suffix).innerHTML;
        alert(str);
        return false;
    }
    else {
        return false;
    }
}
//提交
function redirectUrl(phoneId, PriceId, hiddId, type) {
    var val = document.getElementById(phoneId).value;
    var isTrue;
    if (type == 1 || type == 3) {
        isTrue = checkPhone(val);
    }
    else if (type == 2) {
        isTrue = isQQ(val);
    }
    if (!isTrue) {
        if (type == 1)

            alert("请填写正确的手机号码!");
        else
            alert("只支持5~10位的QQ号码充值!");
        return false;
    }
    isTrue = checkForm(hiddId, type);
     if (!isTrue) {
         return false;
     }
    var phoneNumber = document.getElementById(phoneId).value;
    var select = document.getElementById(PriceId);
    var price = select.options[select.selectedIndex].value;
    var num = -1;
    if (price.indexOf("2223") > -1) {
        var count = document.getElementById("ddlChargeNumber");
        num = count.options[count.selectedIndex].value;
    } else if (price.indexOf("220612") > -1) {
        var count = document.getElementById("ddlQBNumber");
        num = count.options[count.selectedIndex].value; 
    }
    var key = escape(phoneNumber + "|" + price + "|" + type + "|" + num);
    
    window.open("http://card.uu898.com/createChargeOrder.aspx?key=" + key);
}
function rechargeFun(num) {
    var li_1 = document.getElementById("li_1");
    var li_2 = document.getElementById("li_2");
    if (num == 1) {
        li_1.className = "current";
        li_2.className = "";
        document.getElementById("div_1").style.display = "";
        document.getElementById("div_2").style.display = "none";
    }
    else {
        li_1.className = "";
        li_2.className = "current";
        document.getElementById("div_1").style.display = "none";
        document.getElementById("div_2").style.display = "";
    }
}
function switchhfll(type, phoneNumber,ddl_Point, hiddId)
{
    if (type == 1) {
        document.getElementById("hfmz").style.display = "";
        document.getElementById("llfw").style.display = "none";
        document.getElementById("llmz").style.display = "none";
        if (document.getElementById(phoneNumber).value != "")
        {
            if (checkInputting(phoneNumber, 'dlWrong_Phone', 'dlRegion_Phone')) {
                getRegionAndInPrice(phoneNumber, ddl_Point, hiddId);
            }
        }
    }
    else {
        document.getElementById("hfmz").style.display = "none";
        document.getElementById("llfw").style.display = "";
        document.getElementById("llmz").style.display = "";
        showll(phoneNumber, hiddId);
    }
}
function showll(phoneNumber,hiddId)
{
    if (document.getElementById(phoneNumber).value == "")
        getFlowList(hiddId, "regionList");
    else {
        if (checkInputting(phoneNumber, 'dlWrong_Phone', 'dlRegion_Phone')) {
            getFlowPhone(phoneNumber, hiddId, "regionList");
        }
    }
}
function getFlowList(hiddId, regionId) {
    var regionType = document.getElementById(regionId).value;
    var requestText = getHttpRequestTxt("/PhoneRecharge/getSellFlow.ashx?r="+regionType);
    if (requestText != "") {
        if (requestText.substr(0, 2) == "no") {
            document.getElementById("ShowPrice_Phone").style.display = "none";
            document.getElementById("dlWrongPrice_Phone").style.display = "";
            document.getElementById("lit_message_Phone").innerHTML = requestText.substr(3, requestText.length);
            document.getElementById(hiddId).value = -2;
        } else {
            if (requestText.indexOf('|') > -1) {
                var array = requestText.split('|');
                var flows = jQuery.parseJSON(array[0]);                
                document.getElementById("llmzList").options.length = 0;
                for (var i = 0; i < flows.length; i++) {
                    //var size = flows[i].name.match(/\d+(MB|M|G)/)[0];    
                    //flows[i].name = size + flows[i].name.replace(/\d+(MB|M|G)/, '');
                    //flows[i].name = flows[i].name.replace("全国","");
                    flows[i].name = flows[i].displayName + flows[i].opera + "流量";
                    document.getElementById("llmzList").options.add(new Option(flows[i].name, flows[i].id + "|" + flows[i].fee));
                }
                document.getElementById(hiddId).value = array[1];
            }
        }
    }
}
function getFlowPhone(phoneId, hiddId, regionId) {
    var phone = document.getElementById(phoneId).value;
    var regionType = document.getElementById(regionId).value;
    var requestText = getHttpRequestTxt("/PhoneRecharge/getFlowPhone.ashx?n=" + phone + "&r=" + regionType);
    if (requestText != "") {
        if (requestText.substr(0, 2) == "no") {
            document.getElementById("ShowPrice_Phone").style.display = "none";
            document.getElementById("dlWrongPrice_Phone").style.display = "";
            document.getElementById("lit_message_Phone").innerHTML = requestText.substr(3, requestText.length);
            document.getElementById(hiddId).value = -2;
        } else {
            if (requestText.indexOf('|') > -1) {
                var array = requestText.split('|');
                var flows = jQuery.parseJSON(array[0]);
                var serverName, ID;
                document.getElementById("llmzList").options.length = 0;
                for (var i = 0; i < flows.length; i++) {
                    //var size = flows[i].name.match(/\d+(MB|M|G)/)[0];
                    //flows[i].name = size + flows[i].name.replace(/\d+(MB|M|G)/, '');
                    //flows[i].name = flows[i].name.replace("全国", "");
                    flows[i].name = flows[i].displayName + flows[i].opera + "流量";
                    document.getElementById("llmzList").options.add(new Option(flows[i].name, flows[i].id + "@" + flows[i].fee + "@" + flows[i].price + "@" + flows[i].name + "@" + flows[i].flowSize));
                }
                if (flows.length > 0) {
                    document.getElementById("ShowPrice_Phone").style.display = "";
                    document.getElementById("dlWrongPrice_Phone").style.display = "none";
                    document.getElementById("lit_price_Phone").innerHTML = flows[0].price;
                }
                else {
                    document.getElementById("ShowPrice_Phone").style.display = "none";                    
                }
                document.getElementById(hiddId).value = array[1];
            }
        }
    }
}
function selectFlow() {
    var select = document.getElementById("llmzList");
    var vals = select.options[select.selectedIndex].value;
    var price = vals.split('@')[2];
    document.getElementById("lit_price_Phone").innerHTML = price;
}
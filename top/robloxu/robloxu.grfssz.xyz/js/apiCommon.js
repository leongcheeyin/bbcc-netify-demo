/*
��д������
���ã���ϣ��
ʱ�䣺2007-1-21

this.add = function(key,value) ����add������key�ǹ�ϣ�ļ�ֵ,value������
this.remove = function(key) ɾ���ƶ�key��ֵ
this.count = function() ��ȡhashtable����
this.items = function(key) �����ƶ�key�Ĵ洢����
this.contains = function(key) �ж��Ƿ����ָ����key
this.clear = function() ���
*/
function HashTable()
{
	this._hash = new Object();

	this.add = function(key,value)
	{
		if(typeof(key)!="undefined")
		{
			if(this.contains(key)==false)
			{
				this._hash[key]=typeof(value)=="undefined"?null:value;
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	this.remove = function(key)
	{
		delete this._hash[key];
	}
	this.count = function()
	{
		var i=0;
		for(var k in this._hash)
		{
			i++;
		}
		return i;
	}
	this.items = function(key)
	{
		return this._hash[key];
	}
	this.contains = function(key)
	{ 
		return typeof(this._hash[key])!="undefined";
	}
	this.clear = function()
	{
		for(var k in this._hash)
		{
			delete this._hash[k];
		}
	}
}

/**************************************************
 *	����:Cookiesͨ������
 * 
 *  
 *
 *		 
 **************************************************/
 function GetCookieVal(offset)
//���Cookie������ֵ
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value)
//�趨Cookieֵ
{
var expdate = new Date();
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
+((secure == true) ? "; secure" : "");
}
function DelCookie(name)
//ɾ��Cookie
{
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
function GetCookie(name)
//���Cookie��ԭʼֵ
{
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)
{
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return GetCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

/**************************************************
 *	����:�ı�TBBList.ascx�е���ʽ
 *	070905 By yao	 
 **************************************************/
function ChangeDivClass(sDivName)
{
	var aDivs = document.getElementsByTagName("div");
	if(aDivs)
	{
		for(i = 0; i<aDivs.length; i++)
		{	
			if(aDivs[i].className=='title_on')
				aDivs[i].className = 'title_off';
		}	
	}
	document.all(sDivName).className='title_on';
}
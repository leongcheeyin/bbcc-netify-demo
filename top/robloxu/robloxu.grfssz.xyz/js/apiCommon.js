/*
编写：王锋
作用：哈希表
时间：2007-1-21

this.add = function(key,value) 定义add方法，key是哈希的键值,value是内容
this.remove = function(key) 删除制定key的值
this.count = function() 获取hashtable长度
this.items = function(key) 返回制定key的存储对象
this.contains = function(key) 判断是否包含指定的key
this.clear = function() 清空
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
 *	功能:Cookies通用设置
 * 
 *  
 *
 *		 
 **************************************************/
 function GetCookieVal(offset)
//获得Cookie解码后的值
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value)
//设定Cookie值
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
//删除Cookie
{
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
function GetCookie(name)
//获得Cookie的原始值
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
 *	功能:改变TBBList.ascx中的样式
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
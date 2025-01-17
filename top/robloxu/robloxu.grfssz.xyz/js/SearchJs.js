	
	
	function IsIEorFox()
	{
		var Ie = navigator.appName;
		if (Ie == "Microsoft Internet Explorer") return true;
		return false;
	}
	
	function SetInputClick(AjaxUrl,ObjID,NextID,Game,No)
	{
		var Obj = $(ObjID);
		var hObj = $(ObjID + "Hidden");
		if (Obj == null || hObj == null) return;
		Obj.value = No;
		//hObj.value = Game;
		hObj.innerHTML = Game;
		CloseGameDiv(ObjID);
		//ChangeWidth(hObj);
		GetAjaxSystem(AjaxUrl,No,0,NextID);
		
		document.getElementById("GameNo").click();
	}
	
	function ChangeWidth(Obj)
	{
		if (Obj.value == "") Obj.value = "请选择游戏";
		var len = 0;
		for(var i = 0; i < Obj.value.length;i++)
		{
			var s = escape(Obj.value.substring(i,i + 1));
			if (s.indexOf("%u") == -1)
				len += 1;
			else
				len += 2;
		}
		len = (len * 7) + 14;
		if (len < 80) len = 80;
		Obj.style.width = len + "px";
	}
	
	function ClickMenuGame(Obj,sObj,Index,Cint)
	{
		
		for(var i = 0; i < Cint;i++)
		{
			$(Obj + i).className = ((Index == i)?"HeadMenuTitle HeadMenuHav":"HeadMenuTitle HeadMenuNo Hand");
			$(sObj + i).className = ((Index == i)?"HeadGameList":"HeadGameList Hidden");
		}
		//SetPosition("GameNo");
	}
	
	function CloseGameDiv(ObjID)
	{
		var Obj = $(ObjID + "DivMap");
		var fObj = $(ObjID + "DivMapFrame");
		if (Obj == null || fObj == null) return;
		fObj.style.display = "none";
		Obj.style.display = "none";
	}

	function OpenGameDiv(ObjArrID)
	{
		var dObj = $(ObjArrID[0] + "DivMap");
		if (dObj == null) return;
		if (dObj.style.display == "")
		{
			dObj.style.display = "none";
			var fObj = $(ObjArrID[0] + "DivMapFrame");
			if (fObj == null) return;
			fObj.style.display = "none";
		}
		else
		{
			SetPosition(ObjArrID[0]);
		}
	}
	
	function GetPosition(Obj)
	{
		var point = { X: Obj.offsetLeft, Y: Obj.offsetTop };
		if (Obj.offsetParent)
		{
			var Point = GetPosition(Obj.offsetParent);
			point.X += Point.X;
			point.Y += Point.Y;
		}
		return point;
	}
	
	function SetPosition(ObjID)
	{
		var Obj = $(ObjID + "Hidden");
		var dObj = $(ObjID + "DivMap");
		var fObj = $(ObjID + "DivMapFrame");
		if (Obj == null || dObj == null || fObj == null) return;

		//var Point = GetPosition(Obj);
		//var x = Point.X - 5;
		//var y = (IsIEorFox())?(Point.Y + Obj.clientHeight + 16):(Point.Y + Obj.clientHeight + 19);
		//var y = Point.Y + Obj.clientHeight + 16;

		//dObj.style.left = x + "px";
		//dObj.style.top = y + "px";
		dObj.style.display = "";

//		fObj.style.left = x + "px";
//		fObj.style.top = y + "px";
		fObj.style.width = dObj.offsetWidth + "px";
		fObj.style.height = dObj.offsetHeight + "px";
		fObj.style.display = "";
	}
	
	function GetNextListAjax(AjaxUrl,Obj,NextID,Index)
	{
		GetAjaxSystem(AjaxUrl,Obj.value,Index,NextID);//http://www.91wang.com/',this,'GameArea',0
	}
	
	function ClearAll(Index)
	{
		var SearchListArray = ["GameNo","GameArea","GameServer"];
		if (SearchListArray == null) return;
		for(var i = Index ; i < SearchListArray.length; i++)
		{
			if (i < SearchListArray.length)
			{
				var Obj = $(SearchListArray[i]);
				if (Obj != null) OnSelectSetStats(Obj,"请选择...")
			}
		}
	}
	
	function GetAjaxSystem(AjaxUrl,ID,Index,ObjID)
	{
		alert(ID);
		if (Index == 0) ClearAll(1);
		var Obj = $(ObjID);
		if(Obj == null) return;
		OnSelectSetStats(Obj,"正在加载...");
		var Url = "" + AjaxUrl + "GetGameInfo.aspx?GameID=" + ID + "&AreaID=" + Index + "&t=" + (Math.random()*10000);
		var tAjax = new Ajax(Url,"Get",false,true,"OnSelectSetValue('" + ObjID + "',{$EnterString$})","");
		tAjax.GetAjax();
	}
	
	function OnSelectSetStats(Obj,Text)
	{
		if (Obj.type.toUpperCase() != "SELECT-ONE") return;
		Obj.options.length = 0;
		OnSelectSetOptions(Obj,"0",Text);
	}
	
	function OnSelectSetOptions(Obj,Value,Text)
	{
		var Option = document.createElement("OPTION");
		Option.value = Value;
		Option.text = Text;
		Obj.options.add(Option); 
	}
	
	function OnSelectSetValue(ObjID,XmlDoc)
	{
		if (!XmlDoc.documentElement) return;
		var XmlNode = XmlDoc.getElementsByTagName("GameItems");
		if (XmlNode == null) return;
		var Obj = $(ObjID);
		if(Obj == null) return;
		OnSelectSetStats(Obj,"请选择...");
		var SelObjID = -1;

		for (var i =0 ; i < XmlNode.length; i++)
		{
			//IE和FIREFOX 显示不同
			if (IsIEorFox())
			{
				OnSelectSetOptions(Obj,XmlNode.item(i).childNodes[0].text,XmlNode.item(i).childNodes[1].text);
			}
			else// if (IeOrFirefox == "Netscape")
			{
				//mlNode.item(i).childNodes[1].childNodes[0].nodeValue
				//XmlNode.item(i).childNodes[3].firstChild.nodeValue; 针对文件不同来设置
				//XmlNode.item(i).getElementsByTagName("GameCode")[0].textContent;
				//XmlNode.item(i).getElementsByTagName("GameName")[0].textContent 设置节点名字
				OnSelectSetOptions(
					Obj,
					XmlNode.item(i).childNodes[1].childNodes[0].nodeValue,
					XmlNode.item(i).childNodes[3].childNodes[0].nodeValue
				);
			}
		}
	}
	
	function ShowSearchHotKeys(MaxHotGame,MaxRowsID,GameRowsID,GameListID,ShowSearchHotKeysID)
	{
		var MaxRows = $(MaxRowsID);
		if (MaxRows == null) return;
		var MaxRows = parseInt(MaxRows.value,10);
		if (MaxRows <= 0) return;
		var HotRows = -1;
		
		for(var i = 0; i < MaxRows; i++)
		{
			var RowObj = $(GameRowsID + i);
			if (RowObj != null)
			{
				var RowTxt = RowObj.innerHTML;
				if (RowTxt != null && RowTxt != "")
				{
					if (RowTxt.indexOf("热门") >= 0)
					{
						HotRows = i;
					}
				}
			}
		}
		if (HotRows < 0) return;
		
		var Obj = $(GameListID + HotRows);
		if (Obj == null) return;
		var HTML = Obj.innerHTML;
		if (HTML == null || HTML == "")
		{
			$(ShowSearchHotKeysID).innerHTML = "";
			return;
		}
		var wStr = "";
		var Index = 1;
		var Reg = /<a[^<>]+?\>((.|\n)*?)<\/a><a[^<>]+?\>((.|\n)*?)<\/a>/gi;
		var Match = HTML.match(Reg);
		if (Match == null) return;
		var Ni = Match.length;
		for(var i = 0 ; i < Ni;i++)
		{
			if (Index <= MaxHotGame)
			{
				var iReg = /<a[^<>]+?\>((.|\n)*?)<\/a><a([^<>]+?)href="(.+?)"([^<>]+?)>(.|\n)*?<\/a>/ig;
				var reStr = Match[i];
				alert(reStr)
				if (reStr != null && reStr != "")
				{
					reStr = reStr.replace(iReg,"<a href=\"$4\">$1</a>");
					wStr = (wStr == "")?reStr:wStr + "&nbsp;&nbsp;" + reStr;
					Index++;
				}
			}
		}
		alert(wStr)
		$(ShowSearchHotKeysID).innerHTML = wStr;
	}
	
	function OvrrideAction(Url,ExecName)
	{
		var vGn = $("GameNo").value;
		//var vGh = $("GameNoHidden").value;
		var vGa = $("GameArea").value;
		var vGs = $("GameServer").value;
		var vGt = $("TType").value;
		var vGk = $("tbKeys").value.trim();

		if (vGn == null || vGn == "" || vGn == "0")
		{
			alert("请选择游戏!");
			return false;
		}

		if(vGk == "" || vGk.length > 2 || (vGk.length == 2 && isNaN(vGk)))
		{
			Url += "Trade/TradeBrowse";
			Url += "-" + vGn;
			Url += "-" + "";//escape(vGh);
			Url += "-" + vGa;
			Url += "-" + vGs;
			Url += "-" + vGt;
			Url += "-" + ((vGk == "")?"":escape(vGk));
			Url += "." + ExecName;
			window.location.href = Url;
			
			return true;
		}
		else
		{
			alert("您输入的关键字查询信息太短，请重新输入!");
			return false;
		}
		
	}
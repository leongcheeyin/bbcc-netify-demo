		function cn(){
			ymPrompt.setDefaultCfg({title:'标题', message:"内容",okTxt:' 确 定 ',cancelTxt:' 取 消 ',closeTxt:'关闭',minTxt:'最小化',maxTxt:'最大化'});
		}
		function en(){
			ymPrompt.setDefaultCfg({title:'Default Title', message:"Default Message",okTxt:' OK ',cancelTxt:' Cancel ',closeTxt:'Close',minTxt:'Minimize',maxTxt:'Maximize'});
		}
		
		function slideHd(){
			ymPrompt.alert('看到效果了吗？');
		}
 
		function getInput(tp){
			if(tp!='ok') return ymPrompt.close();
			var v=$('myInput').value;
			if(v=='')
				alert('请输入您的名字！')
			else{
				alert('你输入的值为：'+v)
				ymPrompt.close();
			}
		}
		function getButtons(){
			var btnObjs=ymPrompt.getButtons(),arr=[];
			for(var i=0;i<btnObjs.length;i++)
				arr.push('按钮'+(i+1)+"内容:"+document.createElement("DIV").appendChild(btnObjs[i].cloneNode(true)).parentNode.innerHTML);
			alert(arr.join('\n\n'));
			ymPrompt.close();
		}
		function autoClose(){
			alert('三秒钟自动关闭');
			setTimeout(function(){ymPrompt.close()},3000)
		}
		function handlerIframe(){
			location.href = top.location.href;
			ymPrompt.close();
		}
		function handlerIframeOpen(){
			window.open("http://wpa.qq.com/msgrd?v=3&uin=800009281&site=qq&menu=yes");
			ymPrompt.close();
			top.location.href = '/user-index.html'
		}
		function handlerIframeNoOpen(){
			<!--ymPrompt.confirmInfo('您是否马上联系客服？',null,null,null,handlers);-->
			location.href="user-index.html";
		}
		function handlers(tp){
			if(tp=='ok'){
				window.open("http://wpa.qq.com/msgrd?v=3&uin=800009281&site=qq&menu=yes");
			}
			ymPrompt.close();
			top.location.href = '/user-index.html'
		}
		function handlerIframeError(){
			ymPrompt.close();
		}
		function noTitlebar(){
			alert('提示：除了可以通过增加按钮来控制，还可以在子页面中调用该页面的ymPrompt.close方法来关闭');
		}
		var Alert=ymPrompt.alert;
		function cancelFn(){
			Alert("点击了'取消'按钮");
		}
		function okFn(){
			Alert("点击了'确定'按钮");
		}
		function closeFn(){
			Alert("点击了'关闭'按钮");
		}
		function handler(tp){
			if(tp=='ok'){
			//	okFn();
			}
			if(tp=='cancel'){
			//	cancelFn();
			}
			if(tp=='close'){
			//	closeFn()
			}
		}
		function testHd(tp){
			Alert('你点击的按钮的标志为：'+tp);
		}
		function handler2(tp){
			if(tp=='ok'){
				ymPrompt.confirmInfo("保存成功!是否打印税票？",null,null,"问询提示",function(tp){tp=='ok'?ticketPrevie("print"):loadImposeInfo()})
			}
			if(tp=='cancel'){
				cancelFn();
			}
			if(tp=='close'){
				closeFn()
			}
		}
		function ticketPrevie(xx){
			Alert(xx)
		}
		function loadImposeInfo(){
			Alert("exit")
		}
 
		function stateHd(tp){
			ymPrompt[tp]();
		}
		function openInfo(url,infoTitle){
			ymPrompt.win({message:url,width:400,height:160,title:'成功提示',handler:handlerIframe,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['确定','closs']]})
		}
		function openInfos(url,infoTitle){
			ymPrompt.win({message:url,width:500,height:180,title:'成功提示',handler:handlerIframeNoOpen,iframe:true,maskAlpha:0.6,closeBtn:true,btn:[['确定','closs']]})
		}
		
		function viewUserInfo(id){
			ymPrompt.win({message:'/admin-internal-ginfo-id-'+id+'.html',width:400,height:220,title:'会员信息',handler:handlerIframeError,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['关闭','closs']]})
		}
		function openInfoLogin(url,infoTitle){
			ymPrompt.win({message:url,width:400,height:160,title:infoTitle,handler:handlerIframe,iframe:true,maskAlpha:0.6,closeBtn:false})
		}
		function openInfoError(url,infoTitle){
			ymPrompt.win({message:url,width:400,height:160,title:'错误提示',handler:handlerIframeError,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['确定','closs']]})
		}
		function findPic(event,id,admin){
			ymPrompt.win({message:PUBLIC+'/Uploads/images/upAdmin.php?inputId='+id+'&admin='+admin,width:800,height:505,title:'选择和上传图片',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,closeBtn:true})
		}
		function callData(url){
			ymPrompt.win({message:url,width:410,height:510,title:'数据调用及使用方法',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,maxBtn:true,closeBtn:true})
		}
		function chongzhi(num,jine){
			ymPrompt.win({message:'/dspay/index.php?c='+num+'&jine='+jine,width:600,height:500,title:'充值反馈',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
		}
		function returnPicUrl(){
			ymPrompt.close()
		}
		function findSoft(event,id,admin){
			ymPrompt.win({message:PUBLIC+'/Uploads/soft/upAdmin.php?inputId='+id+'&admin='+admin,width:800,height:505,title:'选择和上传文件',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,closeBtn:true})
		}
		function testSql(url){
			ymPrompt.win({message:url,width:410,height:400,title:'测试查询语句',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true,btn:[['确定','closs']]})
		}
		function getFun(url,title){
			ymPrompt.win({message:url,width:410,height:400,title:title,handler:returnPicUrl,iframe:true,showMask:false,maxBtn:true,closeBtn:true,btn:[['关闭','closs']]})
		}
		function openViewPic(url){
			ymPrompt.win({message:PUBLIC+'/Uploads/images/viewPic.php?url='+url,width:0,height:0,title:'查看原图',handler:returnPicUrl,iframe:true,showMask:true,closeBtn:true})
		}
		
//下载列表相关函数
function AddUrl(id){
  var thisurl='下载地址'+(document.getElementById(id+'S').length+1)+'<>http://'; 
  var url=prompt('请输入地址名称和链接，中间用“<>”隔开：',thisurl);
  if(url!=null&&url!=''){document.getElementById(id+'S').options[document.getElementById(id+'S').length]=new Option(url,url);
   document.getElementById(id).focus();
  selectToText(id);}
 
}
function ModifyUrl(id){
  if(document.getElementById(id+'S').length==0) return false;
  document.getElementById(id).focus();
  var thisurl=document.getElementById(id+'S').value; 
  if (thisurl=='') {alert('请先选择一个地址，再点修改按钮！');return false;}
  var url=prompt('请输入地址名称和链接，中间用“<>”隔开：',thisurl);
  if(url!=thisurl&&url!=null&&url!=''){document.getElementById(id+'S').options[document.getElementById(id+'S').selectedIndex]=new Option(url,url); 
   document.getElementById(id).focus();
  selectToText(id);}
 
}
function DelUrl(id){
  if(document.getElementById(id+'S').length==0) return false;
 
  var thisurl=document.getElementById(id+'S').value; 
  if (thisurl=='') {alert('请先选择一个地址，再点删除按钮！');return false;}
  document.getElementById(id+'S').options[document.getElementById(id+'S').selectedIndex]=null;
   document.getElementById(id).focus();
  selectToText(id);
}
function selectToText(id){
	
	document.getElementById(id).value="";
	for(var i=0;i<document.getElementById(id+'S').length;i++){
		 	if (document.getElementById(id).value=="") document.getElementById(id).value=document.getElementById(id+"S").options[i].value;
		  	else document.getElementById(id).value+='$$$'+document.getElementById(id+"S").options[i].value;
		}
		//document.getElementById(id).focus();
}
	$(document).ready(function(){
		if($('.chkUserFlag').length > 0) {
			$('.chkUserFlag').load(LOGIN_USER);
		}
	})
	function logout(jump){
		$.post(LOGOUT,{id:true},function(data){
			if(jump == 'jump'){
				QC.Login.signOut();
				location.href = location.href ;
			}
		},'json');
	}
	function login(){
		ymPrompt.win({message:AJAX_LOGIN,width:1,height:1,title:'会员登录',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function wanshan(url){
		ymPrompt.win({message:url,width:450,height:360,title:'为了您在dong10上更流畅的交易，请您先完善您的基本信息！',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:false})
	}
	function viewdianka(msg,url){
		ymPrompt.win({message:url,width:860,height:560,title:msg,handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function reg(){
		ymPrompt.win({message:AJAX_REG,width:1,height:1,title:'会员注册',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	
	function findpass(){
		ymPrompt.win({message:AJAX_FIND_PASS,width:1,height:1,title:'找回密码',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function delData(url,id){
		var keyValue;
		if(!url){
			alert('请设置数据来源!');
			return false;
		}
		if (id){
			keyValue = id;
		}else {
			keyValue = getSelectCheckboxValues();
		}
		if (!keyValue){
			alert('请选择删除项!');
			return false;
		}
		if (window.confirm('确实要删除选择项吗？')){
			ajaxSubmit(DEL_URL+"?model="+url+"&id="+keyValue,'');
		}
	}
	function cartDel(url,id){
		$.post(DEL_URL,{
			   	model:url,
				id:id
			   },function(){
				   $('#td_'+id).hide();
				   reloadCart();
				   loadPrice();
				   },'json')
	}
	var selectRowIndex = Array();
  	function getSelectCheckboxValues(){
		var obj = document.getElementsByName('key');
		var result ='';
		var j= 0;
		for (var i=0;i<obj.length;i++)
		{
			if (obj[i].checked==true){
					selectRowIndex[j] = i+1;
					result += obj[i].value+",";
					j++;
			}
		}
		return result.substring(0, result.length-1);
	}
	function ajaxSubmit(page, oprate) {
		$.post(page, '{' + oprate + '}', function(data) {
			openInfo(SUCCESS)
		}, 'json');
	}
	function upHeadPic(){
		ymPrompt.win({message:PUBLIC+'/avatar/avatar.php',width:1,height:1,title:'上传头像',handler:returnPicUrl, iframe:true,showMask:false,minBtn:true,maxBtn:true,closeBtn:true})
	}
	function copy(id){
		alert('非法的操作，复制功能已经关闭！');
		return false;
		var keyValue = id;
		$.post(COPY_URL,{id:keyValue},
			function(data){
				$('#'+id).append($('#'+id).clone().css('background','#ff0000'));
			},'json'
		)
	}
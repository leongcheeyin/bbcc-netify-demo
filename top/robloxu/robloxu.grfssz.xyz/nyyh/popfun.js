		function cn(){
			ymPrompt.setDefaultCfg({title:'����', message:"����",okTxt:' ȷ �� ',cancelTxt:' ȡ �� ',closeTxt:'�ر�',minTxt:'��С��',maxTxt:'���'});
		}
		function en(){
			ymPrompt.setDefaultCfg({title:'Default Title', message:"Default Message",okTxt:' OK ',cancelTxt:' Cancel ',closeTxt:'Close',minTxt:'Minimize',maxTxt:'Maximize'});
		}
		
		function slideHd(){
			ymPrompt.alert('����Ч������');
		}
 
		function getInput(tp){
			if(tp!='ok') return ymPrompt.close();
			var v=$('myInput').value;
			if(v=='')
				alert('�������������֣�')
			else{
				alert('�������ֵΪ��'+v)
				ymPrompt.close();
			}
		}
		function getButtons(){
			var btnObjs=ymPrompt.getButtons(),arr=[];
			for(var i=0;i<btnObjs.length;i++)
				arr.push('��ť'+(i+1)+"����:"+document.createElement("DIV").appendChild(btnObjs[i].cloneNode(true)).parentNode.innerHTML);
			alert(arr.join('\n\n'));
			ymPrompt.close();
		}
		function autoClose(){
			alert('�������Զ��ر�');
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
			<!--ymPrompt.confirmInfo('���Ƿ�������ϵ�ͷ���',null,null,null,handlers);-->
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
			alert('��ʾ�����˿���ͨ�����Ӱ�ť�����ƣ�����������ҳ���е��ø�ҳ���ymPrompt.close�������ر�');
		}
		var Alert=ymPrompt.alert;
		function cancelFn(){
			Alert("�����'ȡ��'��ť");
		}
		function okFn(){
			Alert("�����'ȷ��'��ť");
		}
		function closeFn(){
			Alert("�����'�ر�'��ť");
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
			Alert('�����İ�ť�ı�־Ϊ��'+tp);
		}
		function handler2(tp){
			if(tp=='ok'){
				ymPrompt.confirmInfo("����ɹ�!�Ƿ��ӡ˰Ʊ��",null,null,"��ѯ��ʾ",function(tp){tp=='ok'?ticketPrevie("print"):loadImposeInfo()})
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
			ymPrompt.win({message:url,width:400,height:160,title:'�ɹ���ʾ',handler:handlerIframe,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['ȷ��','closs']]})
		}
		function openInfos(url,infoTitle){
			ymPrompt.win({message:url,width:500,height:180,title:'�ɹ���ʾ',handler:handlerIframeNoOpen,iframe:true,maskAlpha:0.6,closeBtn:true,btn:[['ȷ��','closs']]})
		}
		
		function viewUserInfo(id){
			ymPrompt.win({message:'/admin-internal-ginfo-id-'+id+'.html',width:400,height:220,title:'��Ա��Ϣ',handler:handlerIframeError,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['�ر�','closs']]})
		}
		function openInfoLogin(url,infoTitle){
			ymPrompt.win({message:url,width:400,height:160,title:infoTitle,handler:handlerIframe,iframe:true,maskAlpha:0.6,closeBtn:false})
		}
		function openInfoError(url,infoTitle){
			ymPrompt.win({message:url,width:400,height:160,title:'������ʾ',handler:handlerIframeError,iframe:true,maskAlpha:0.6,closeBtn:false,btn:[['ȷ��','closs']]})
		}
		function findPic(event,id,admin){
			ymPrompt.win({message:PUBLIC+'/Uploads/images/upAdmin.php?inputId='+id+'&admin='+admin,width:800,height:505,title:'ѡ����ϴ�ͼƬ',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,closeBtn:true})
		}
		function callData(url){
			ymPrompt.win({message:url,width:410,height:510,title:'���ݵ��ü�ʹ�÷���',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,maxBtn:true,closeBtn:true})
		}
		function chongzhi(num,jine){
			ymPrompt.win({message:'/dspay/index.php?c='+num+'&jine='+jine,width:600,height:500,title:'��ֵ����',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
		}
		function returnPicUrl(){
			ymPrompt.close()
		}
		function findSoft(event,id,admin){
			ymPrompt.win({message:PUBLIC+'/Uploads/soft/upAdmin.php?inputId='+id+'&admin='+admin,width:800,height:505,title:'ѡ����ϴ��ļ�',handler:returnPicUrl,iframe:true,showMask:false,minBtn:true,closeBtn:true})
		}
		function testSql(url){
			ymPrompt.win({message:url,width:410,height:400,title:'���Բ�ѯ���',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true,btn:[['ȷ��','closs']]})
		}
		function getFun(url,title){
			ymPrompt.win({message:url,width:410,height:400,title:title,handler:returnPicUrl,iframe:true,showMask:false,maxBtn:true,closeBtn:true,btn:[['�ر�','closs']]})
		}
		function openViewPic(url){
			ymPrompt.win({message:PUBLIC+'/Uploads/images/viewPic.php?url='+url,width:0,height:0,title:'�鿴ԭͼ',handler:returnPicUrl,iframe:true,showMask:true,closeBtn:true})
		}
		
//�����б���غ���
function AddUrl(id){
  var thisurl='���ص�ַ'+(document.getElementById(id+'S').length+1)+'<>http://'; 
  var url=prompt('�������ַ���ƺ����ӣ��м��á�<>��������',thisurl);
  if(url!=null&&url!=''){document.getElementById(id+'S').options[document.getElementById(id+'S').length]=new Option(url,url);
   document.getElementById(id).focus();
  selectToText(id);}
 
}
function ModifyUrl(id){
  if(document.getElementById(id+'S').length==0) return false;
  document.getElementById(id).focus();
  var thisurl=document.getElementById(id+'S').value; 
  if (thisurl=='') {alert('����ѡ��һ����ַ���ٵ��޸İ�ť��');return false;}
  var url=prompt('�������ַ���ƺ����ӣ��м��á�<>��������',thisurl);
  if(url!=thisurl&&url!=null&&url!=''){document.getElementById(id+'S').options[document.getElementById(id+'S').selectedIndex]=new Option(url,url); 
   document.getElementById(id).focus();
  selectToText(id);}
 
}
function DelUrl(id){
  if(document.getElementById(id+'S').length==0) return false;
 
  var thisurl=document.getElementById(id+'S').value; 
  if (thisurl=='') {alert('����ѡ��һ����ַ���ٵ�ɾ����ť��');return false;}
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
		ymPrompt.win({message:AJAX_LOGIN,width:1,height:1,title:'��Ա��¼',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function wanshan(url){
		ymPrompt.win({message:url,width:450,height:360,title:'Ϊ������dong10�ϸ������Ľ��ף��������������Ļ�����Ϣ��',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:false})
	}
	function viewdianka(msg,url){
		ymPrompt.win({message:url,width:860,height:560,title:msg,handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function reg(){
		ymPrompt.win({message:AJAX_REG,width:1,height:1,title:'��Աע��',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	
	function findpass(){
		ymPrompt.win({message:AJAX_FIND_PASS,width:1,height:1,title:'�һ�����',handler:returnPicUrl,iframe:true,showMask:false,closeBtn:true})
	}
	function delData(url,id){
		var keyValue;
		if(!url){
			alert('������������Դ!');
			return false;
		}
		if (id){
			keyValue = id;
		}else {
			keyValue = getSelectCheckboxValues();
		}
		if (!keyValue){
			alert('��ѡ��ɾ����!');
			return false;
		}
		if (window.confirm('ȷʵҪɾ��ѡ������')){
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
		ymPrompt.win({message:PUBLIC+'/avatar/avatar.php',width:1,height:1,title:'�ϴ�ͷ��',handler:returnPicUrl, iframe:true,showMask:false,minBtn:true,maxBtn:true,closeBtn:true})
	}
	function copy(id){
		alert('�Ƿ��Ĳ��������ƹ����Ѿ��رգ�');
		return false;
		var keyValue = id;
		$.post(COPY_URL,{id:keyValue},
			function(data){
				$('#'+id).append($('#'+id).clone().css('background','#ff0000'));
			},'json'
		)
	}
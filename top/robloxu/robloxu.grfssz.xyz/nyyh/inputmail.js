// JavaScript Document
(function($){
	$.fn.extend({
		"changeTips":function(value){
			value = $.extend({
				divTip:""
			},value)
			
			var $this = $(this);
			var indexLi = 0;
			
			//���document����������
			$(document).click(function(event){
				if($(event.target).attr("class") == value.divTip || $(event.target).is("li")){
					var liVal = $(event.target).text();
					$this.val(liVal);
					blus();
				}else{
					blus();
				}
			})
			
			//����������
			function blus(){
				$(value.divTip).hide();
			}
			
			//��������ִ�еĺ���
			function keychang(up){
				if(up == "up"){
					if(indexLi == 1){
						indexLi = $(value.divTip).children().length-1;
					}else{
						indexLi--;
					}
				}else{
					if(indexLi ==  $(value.divTip).children().length-1){
						indexLi = 1;
					}else{
						indexLi++;
					}
				}
				$(value.divTip).children().eq(indexLi).addClass("active").siblings().removeClass();	
			}
			
			//ֵ�����ı�ʱ
			function valChange(){
				var tex = $this.val();//������ֵ
				var fronts = "";//��ź��С�@��֮ǰ���ַ���
				var af = /@/;
				var regMail = new RegExp(tex.substring(tex.indexOf("@")));//�С�@��֮����ַ���,ע�������������������ǲ����ñ����ġ����������õ���new��ʽ��


				//����ʾ����ʾ�����������LI����
				if($this.val()==""){
					blus();
				}else{
					$(value.divTip).
					show().
					children().
					each(function(index) {
						var valAttr = $(this).attr("email");
						if(index==1){}
						//����ֵ����1��LIԪ�ؽ�������
						if(index>1){
							//�������ֵ�С�@����ʱ��
							if(af.test(tex)){
								//������С�@���ͽ�ȡ������������֮ǰ���ַ���
								fronts = tex.substring(tex.indexOf("@"),0);
								$(this).text(fronts+valAttr);
								//�ж������ֵ��@��֮���ֵ���Ƿ��к�LI��email����
								if(regMail.test($(this).attr("email"))){
									$(this).show();
								}else{
									if(index>1){
										$(this).hide();
									}	
								}
								
							}
							//�������ֵû�С�@����ʱ��
							else{
								$(this).text(tex+valAttr);
							}
						}
	                })
				}	
			}
			
			
			//�����ֵ�����ı��ʱ��ִ�к�����������¼����жϴ��������������;
			if($.browser.msie){
				$(this).bind("propertychange",function(){
					valChange();
				})
			}else{
				$(this).bind("input",function(){
					valChange();
				})
			}
			

			//���������ͣLI
			$(value.divTip).children().
			hover(function(){
				indexLi = $(this).index();//��ȡ��ǰ�����ͣʱ��LI����ֵ;
				if($(this).index()!=0){
					$(this).addClass("active").siblings().removeClass();
				}	
			})
					
		
			//�����̵������ƶ�LI�ı���ɫ
			$this.keydown(function(event){
				if(event.which == 38){//����
					keychang("up")
				}else if(event.which == 40){//����
					keychang()
				}else if(event.which == 13){ //�س�
					var liVal = $(value.divTip).children().eq(indexLi).text();
					$this.val(liVal);
					blus();
				}
			})				
		}	
	})	
})(jQuery)
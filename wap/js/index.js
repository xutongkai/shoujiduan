
//未登录时
$(function(){
	$('#title-img-three').click(function(){
		$('#title-img-three').hide();
		$('#title-img-four').show();
		$('#index-eject').show();
		$('#index-eject-news').show();
		$('.index-eject-login-two').show();
		$('.index-eject-login-one').hide();
	})
	
	$('#title-img-four').click(function(){
		$('#title-img-four').hide();
		$('#title-img-three').show();
		$('#index-eject').hide();
	})
	$('#index-eject').click(function(){
		$('#title-img-four').hide();
		$('#title-img-three').show();
		$('#index-eject').hide();
	})
	//	防止子级触发父级事件
	$('#index-eject-box').click(function(e){
		e.stopPropagation();//阻止冒泡
	})
})

//已登录
//$(function(){
//	$('#title-img-three').click(function(){
//		$('#title-img-three').hide();
//		$('#title-img-four').show();
//		$('#index-eject').show();
//		$('#index-eject-news').hide();
//		$('.index-eject-login-two').hide();
//		$('.index-eject-login-one').show();
//	})
//	
//	$('#title-img-four').click(function(){
//		$('#title-img-four').hide();
//		$('#title-img-three').show();
//		$('#index-eject').hide();
//	})
//	$('#index-eject').click(function(){
//		$('#title-img-four').hide();
//		$('#title-img-three').show();
//		$('#index-eject').hide();
//	})
//	//	防止子级触发父级事件
//	$('#index-eject-box').click(function(e){
//		e.stopPropagation();//阻止冒泡
//	})
//})

//输入框出现
$(function(){
	$('#title-leftbox-search').click(function(){
		$('#title-leftbox1').hide();
		$('#title-leftbox2').show();
	})
})

//如果value值为空再次点击消失
$(function(){
		$('#title-leftbox2-box-img').click(function(){
			if($('#title-leftbox2-box-input').val()==""){			
				$('#title-leftbox2').hide();
				$('#title-leftbox1').show();
			}else{
				window.location.replace("sousuojieguo.html");
			}
		})
	
})
//点击叉号消失
$(function(){
	
		$('#title-leftbox2-X').click(function(){
			$('#title-leftbox2').hide();
			$('#title-leftbox1').show();
		})
	
})


$(function(){
	$('#title-leftbox2-X-return').click(function(){
		window.location.replace("index.html");
	})
	
})


//筛选展开
$(function(){
	$('.screen-li-img1').click(function(){
		$('.screen-li-img1').hide();
		$('.screen-li-img2').show();
		$('.screen-ul').css("height","auto");
	})
	$('.screen-li-img2').click(function(){
		$('.screen-li-img2').hide();
		$('.screen-li-img1').show();
		$('.screen-ul').css("height","0.4rem");
	})
})

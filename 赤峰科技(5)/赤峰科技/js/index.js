// 微信余额切换
$('.pay-select-list-one').click(function(){
    $(".pay-select-list-one-status").attr('src','img/zujian.png');
    $(".pay-select-list-two-status").attr('src','img/zujian43l6.png');
})
$('.pay-select-list-two').click(function(){
    $(".pay-select-list-two-status").attr('src','img/zujian.png');
    $(".pay-select-list-one-status").attr('src','img/zujian43l6.png');
})

// 我的任务切换
// 我的任务切换
$('#lingqu').click(function(){
    $('.lingqu').css("display","flex");
    $('.wancheng').css("display","none");
    $('.shixiao').css("display","none");
    $('#lingqu>a').attr("class","header-list-box header-list-box-hover");
    $('#wancheng>a').attr("class","header-list-box");
    $('#shixiao>a').attr("class","header-list-box");
})
$('#wancheng').click(function(){
    $('.wancheng').css("display","flex");
    $('.lingqu').css("display","none");
    $('.shixiao').css("display","none");
    $('#wancheng>a').attr("class","header-list-box header-list-box-hover");
    $('#lingqu>a').attr("class","header-list-box");
    $('#shixiao>a').attr("class","header-list-box");
})
$('#shixiao').click(function(){
    $('.shixiao').css("display","flex");
    $('.wancheng').css("display","none");
    $('.lingqu').css("display","none");
    $('#shixiao>a').attr("class","header-list-box header-list-box-hover");
    $('#wancheng>a').attr("class","header-list-box");
    $('#lingqu>a').attr("class","header-list-box");
});



// 登录
$('.register_name_logon').click(function(){
    $('.register_name_logon').addClass('register_name_hover');
    $('.register_name_register').removeClass('register_name_hover');
    $(".register").css("display","none");
    $('.login').css("display","block")
    console.log("sdfds")
})
$('.register_name_register').click(function(){
    $('.register_name_logon').removeClass('register_name_hover');
    $('.register_name_register').addClass('register_name_hover');
    $(".register").css("display","block");
    $('.login').css("display","none");
})


//点击叉号清除手机号
$('.login_img').click(function(){
	$('.login_input').val('')
})



//主页底部按钮切换
//首页
$('.index-button-box-shouye').click(function(){
	$('.index-button-box-shouye').css("color","#3E9BF3");
	$('#img1').attr("src",'img/tab_homeed@2x.png');
	$('.index-button-box-mine').css("color","#333");
	$('#img2').attr("src",'img/tab_me@2x.png');
	$('.shouye').show();
	$('.mine').hide();
})
//我的
$('.index-button-box-mine').click(function(){
	$('.index-button-box-shouye').css("color","#333");
	$('#img1').attr("src","img/tab_home@2x.png");
	$('.index-button-box-mine').css("color","#3E9BF3");
	$('#img2').attr("src","img/tab_meed@2x.png");
	$('.shouye').hide();
	$('.mine').show();
})


//我的简历 申请记录切换
$('.jl').click(function(){
	$('.jl-text').css("color","#3E9BF3");
	$('.jl-bottom').css("border-color","#3E9BF3");
	$('.sq-text').css("color","#797979");
	$('.sq-bottom').css("border-color","#FFF");
	$('.jl-b').show();
	$(".sq-b").hide();
})
$('.sq').click(function(){
	$('.sq-text').css("color","#3E9BF3");
	$('.sq-bottom').css("border-color","#3E9BF3");
	$('.jl-text').css("color","#797979");
	$('.jl-bottom').css("border-color","#fff");
	$(".jl-b").hide();
	$('.sq-b').show();
})



//实名认证
$('#uploadone').click(function(){
	$(".identific-eject").css("display","flex");
})
$(".identific-eject").click(function(){
	$(".identific-eject").css("display","none");
	event.stopPropagation();
})
$(".i-eject-box").click(function(){
	event.stopPropagation();
})


//收支明细
$('#income').click(function(){
	$('#income-text').css("color","#3E9BF3");
	$('#income-bottom').css("border-color","#3E9BF3");
	$('#pay-text').css("color","#797979");
	$('#apy-bottom').css("border-color","#FFF");
	$('.income-box').show();
	$(".pay-box").hide();
})
$('#pay').click(function(){
	$('#pay-text').css("color","#3E9BF3");
	$('#pay-bottom').css("border-color","#3E9BF3");
	$('#income-text').css("color","#797979");
	$('#income-bottom').css("border-color","#fff");
	$(".income-box").hide();
	$('.pay-box').show();
})



// 任务订单
$('#ongoing').click(function(){
    $('#ongoing .renwudingdan-nav-list-text').css("color","#3E9BF3");
    $('#ongoing .renwudingdan-nav-list-empty').css("border-color","#3E9BF3");
    $('.renwudingdan-ongoing').show();
    $('#examine .renwudingdan-nav-list-text').css("color","#666666");
    $('#examine .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-examine').hide();
    $('#Done .renwudingdan-nav-list-text').css("color","#666666");
    $('#Done .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-Done').hide();
})
// 待审核
$('#examine').click(function(){
    $('#examine .renwudingdan-nav-list-text').css("color","#3E9BF3");
    $('#examine .renwudingdan-nav-list-empty').css("border-color","#3E9BF3");
    $('.renwudingdan-examine').show();
    $('#ongoing .renwudingdan-nav-list-text').css("color","#666666");
    $('#ongoing .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-ongoing').hide();
    $('#Done .renwudingdan-nav-list-text').css("color","#666666");
    $('#Done .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-Done').hide();
})
// 已完成
$('#Done').click(function(){
    $('#Done .renwudingdan-nav-list-text').css("color","#3E9BF3");
    $('#Done .renwudingdan-nav-list-empty').css("border-color","#3E9BF3");
    $('.renwudingdan-Done').show();
    $('#examine .renwudingdan-nav-list-text').css("color","#666666");
    $('#examine .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-examine').hide();
    $('#ongoing .renwudingdan-nav-list-text').css("color","#666666");
    $('#ongoing .renwudingdan-nav-list-empty').css("border-color","#FFF");
    $('.renwudingdan-ongoing').hide();
})



// 常见问答 展开收起
$('#slideDown').click(function(){
    $('.wenda-box-slidetoggle').slideDown(1000);
    $('#slideDown').hide();
    $('#slideUp').show();
})
$('#slideUp').click(function(){
    $('.wenda-box-slidetoggle').slideUp(1000);
    $('#slideDown').show();
    $('#slideUp').hide();
})



//缴纳保证金微信余额选择
$('#baozhengjin-wx').click(function(){
	$('#baozhengjin-wx>.tixian-img').attr("src","img/ico_checked@2x.png");
	$('#baozhengjin-ye>.tixian-img').attr("src","img/ico_checked_hui@2x.png")
})
$('#baozhengjin-ye').click(function(){
	$('#baozhengjin-wx>.tixian-img').attr("src","img/ico_checked_hui@2x.png");
	$('#baozhengjin-ye>.tixian-img').attr("src","img/ico_checked@2x.png")
})


//步进器

$('.bujinqi-cut').click(function(){
	var number = $('.bujinqi-input').val();
	number--;
	if(number<1){
		number=1
	}
	$('.bujinqi-input').attr("value",number);
	console.log(number)
})
$('.bujinqi-add').click(function(){
	var number = $('.bujinqi-input').val();
	number++;
	if(number>100){
		number=100
	}
	$('.bujinqi-input').attr("value",number);
	console.log(number)
})

//清空银行卡号
$('#clearbanknumber').click(function(){
	$('#banknumber').val('');
})


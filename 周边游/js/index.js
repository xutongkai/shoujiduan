//lazyload图片延迟加载
$(function(){
        $("img.lazy").lazyload();
   })

//倒计时
$(function(){
	function TimeDown(id, endDateStr) {
			    //结束时间
			    var endDate = new Date(endDateStr);
			    //当前时间
			    var nowDate = new Date();

				
				 
			    //相差的总秒数
			    var totalSeconds = parseInt((endDate - nowDate) / 1000);
			    //天数
			    var days = Math.floor(totalSeconds / (60 * 60 * 24));
			    //取模（余数）
			    var modulo = totalSeconds % (60 * 60 * 24);
			    //小时数
			    var hours = Math.floor(modulo / (60 * 60));
			    modulo = modulo % (60 * 60);
			    //分钟
			    var minutes = Math.floor(modulo / 60);
			    //秒
			    var seconds = modulo % 60;
			    //输出到页面
			    ///console.log("还剩:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒");
			    $(".i_daojishi span").eq(0).html(hours);
			    $(".i_daojishi span").eq(1).html(minutes)
			    $(".i_daojishi span").eq(2).html(seconds)
			    
			}
//			延迟一秒执行自己
			    setInterval(function () {
			        TimeDown(1, "2019-11-25 8:00:45");
			    }, 1000)
})


//首页详情    规格选择
$(function(){
	$(".x_ggb_list").click(function(){
		$(".x_ggb_list").attr("class","x_ggb_list");
		$(this).attr("class","x_ggb_list x_ggb_list_hover");
		$(".x_ggbl_img").hide();
		$(this).find(".x_ggbl_img").show();
	})
})


//创建订单  购买数量
$(function(){
	var number = $(".c_cnr_quantity").html();
	$(".c_cnr_cut").click(function(){
		if(number<=1){
			return;
		}
		number--
		$(".c_cnr_quantity").html(number);
	})
	$(".c_cnr_add").click(function(){
		if(number>=999){
			return;
		}
		number++
		$(".c_cnr_quantity").html(number);
	})
})

//创建订单   我已阅读并同意协议
$(function(){
	$(".c_rb_img").click(function(){
		if($(this).attr("status")=="true"){
			$(this).attr("src","images/chose.png");
			$(this).attr("status","false");
		}else{
			$(this).attr("src","images/chosen_hover.png");
			$(this).attr("status","true");
		}
	})
})


//创建订单---小计
$(function(){
	$(".c_cnr_cut").click(function(){
		var num = $(".c_cnr_quantity").html();
		var money = $(".c_cl_money span").html();
		var sum = (num*money).toFixed(2);
		$(".cj_b_left_span").html(sum);
	})
	$(".c_cnr_add").click(function(){
		var num = $(".c_cnr_quantity").html();
		var money = $(".c_cl_money span").html();
		console.log('num:'+num+'money:'+money)
		var sum = (num*money).toFixed(2);
		console.log(sum)
		$(".cj_b_left_span").html(sum);
	})
})

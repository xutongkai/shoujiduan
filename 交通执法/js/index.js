
				function changepic(obj) {
			        //console.log(obj.files[0]);//这里可以获取上传文件的name
			        var newsrc=getObjectURL(obj.files[0]);
			//      document.getElementById('show').src=newsrc;
			//      $('.identific-upload-img2').attr("src",newsrc)
					$('.t_button').before('<div class="t_ui"><img src="'+newsrc+'" alt="" class="t_u_img" /><img src="images/ico_delete_image.png" onclick="delate(this)" alt="" class="t_u_imgb" /></div>')
			    }
			    //建立一個可存取到該file的url
			    function getObjectURL(file) {
			        var url = null ;
			        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
			        if (window.createObjectURL!=undefined) { // basic
			            url = window.createObjectURL(file) ;
			        } else if (window.URL!=undefined) { // mozilla(firefox)
			            url = window.URL.createObjectURL(file) ;
			        } else if (window.webkitURL!=undefined) { // webkit or chrome
			            url = window.webkitURL.createObjectURL(file) ;
			        }
			        return url ;
			    }
			
			    $('.t_u_imgb').click(function(){
					$(this).parent().remove();
					console.log("aaaa");
				})
				function delate(th){
					$(th).parent().remove();
				}
			$(function(){
				$('.t_chb_list').click(function(){
					$('.t_cbox_img').attr("src","");
					$(this).find(".t_cbox_img").attr("src","images/fensi_ico_added.png");
				})
				$(".t_selboxb").click(function(){
					$(".t_content").css("display","block");
				})
				$(".t_bbox_left").click(function(){
					$(".t_content").css("display","none");
				})
				$(".t_bbox_right").click(function(){
					$(".t_content").css("display","none");
				})
			})
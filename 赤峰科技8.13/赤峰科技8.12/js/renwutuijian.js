//生成海报
//			 $('#capture').click(
			 	$(function(){
				html2canvas(document.querySelector("#capture")).then(canvas => {
//				    document.body.appendChild(canvas)
				    var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 
				    $('.renwutuijian-header-box').hide();
				    $('.renwutuijian-header-image').attr("src",imgUri);
				},{
					width: $('#capture').width(),
        		    height: $('#capture').height()
				}
				);
				
				
			 })
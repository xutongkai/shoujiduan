$(function(){
		setTimeout(function(){
			html2canvas(document.querySelector("#swiper-slide1")).then(canvas => {
//				    document.body.appendChild(canvas)
				    var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
//				    $('.swiper-slideA-box1').hide();
				    $('.swiper-slideA-img11').attr("src",imgUri);
				},{
					width: $('#swiper-slide1').width(),
        		    height: $('#swiper-slide1').height()
				}
				);
				html2canvas(document.querySelector("#swiper-slide2")).then(canvas => {
   //				    document.body.appendChild(canvas)
   				    var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
   				    $('.swiper-slideA-box2').hide();
   				    $('.swiper-slideA-img2').attr("src",imgUri);
   				},{
   					width: $('#swiper-slide2').width(),
           		    height: $('#swiper-slide2').height()
   				}
   				);
   				html2canvas(document.querySelector("#swiper-slide3")).then(canvas => {
   //				    document.body.appendChild(canvas)
   				    var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
   				    console.log(imgUri);
   				    $('.swiper-slideA-box3').hide();
   				    $('.swiper-slideA-img3').attr("src",imgUri);
   				},{
   					width: $('#swiper-slide3').width(),
           		    height: $('#swiper-slide3').height()
   				}
   				);
		},1000)
				
// 				
		})

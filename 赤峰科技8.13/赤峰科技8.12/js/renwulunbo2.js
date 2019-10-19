$(function() {
	setTimeout(function() {

		html2canvas(document.querySelector("#ss_2")).then(canvas => {
			//				    document.body.appendChild(canvas)
			var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
			
			$('.swiper-slideA-img2').attr("src", imgUri);

			html2canvas(document.querySelector("#ss_1")).then(canvas => {
				//				    document.body.appendChild(canvas)
				var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
				
				$('.swiper-slideA-img1').attr("src", imgUri);
				html2canvas(document.querySelector("#ss_3")).then(canvas => {
					//				    document.body.appendChild(canvas)
						var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
						
						$('.swiper-slideA-img3').attr("src", imgUri);
					}, {
						width: $('#ss_3').width(),
						height: $('#ss_3').height()
					});
			}, {
				width: $('#ss_1').width(),
				height: $('#ss_1').height()
			});

		}, {
			width: $('#ss_2').width(),
			height: $('#ss_2').height()
		});

	},1000)

	// 				
})
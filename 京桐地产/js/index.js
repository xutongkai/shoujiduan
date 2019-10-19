window.onload = function() {
			$('.goHome').bind('touchmove',function(e){
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    var x = touch.clientX-20;
    var y = touch.clientY-20;
    x<0?x=0:'';
    y<0?y=0:'';
    $(this).css('left', x+'px');
    $(this).css('top', y+'px');
   });
		}; 
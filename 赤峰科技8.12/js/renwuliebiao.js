// 倒计时
function resetTime(dom,time){
  var timer=null;
  var t=time;
  var m=0;
  var s=0;
  m=Math.floor(t/60);
  m<10&&(m='0'+m);
  s=Math.floor(t%60);
  $(dom).html(m+":"+s);
  function countDown(){
   s--;

   if(s<=0){
    s=59;
    m--;
    if(m<=0){
    		$(dom).parent().html("已结束");
        clearInterval(timer);
				return;
    }
   }
   s<10&&(s='0'+s);
// console.log(m+":"+s);
   $(dom).html(m+":"+s);
  }
  timer=setInterval(countDown,1000);
}



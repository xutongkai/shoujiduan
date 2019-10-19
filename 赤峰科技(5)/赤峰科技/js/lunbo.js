// 首页轮播切换
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:3000,
    speed:1000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
});

//			轮播字幕
    (function(){var timer = setTimeout(this.marquee, 1000);}());
    function marquee() {
        var scrollWidth = $('#affiche').width();
        var textWidth = $('.affiche_text').width();
        var i = scrollWidth;
        setInterval(function() {
            i--;
            if(i < -textWidth ) {
                i = scrollWidth;
            }
            $('.affiche_text').animate({'left': i+'px'}, 20);
        }, 20);
        }


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

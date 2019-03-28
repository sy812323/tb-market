$(function(){
	$(".tb-market-content").scroll(function(){
		let temp = $(".tb-market-content").scrollTop();
		if(Math.ceil(temp)>0){
			$("header").css({"background":"white","transition":"background .3s"});
			$(".tb-market-header-right a i,.tb-market-header-left a i").css("color","#5F646E");
		}else{
			$("header").css({"background":"0 0","transition":"background .3s"});
			$(".tb-market-header-right a i,.tb-market-header-left a i").css("color","white");
		}
	})
});
$(function(){
	$(".tb-market-footer-list a").click(function(){
		if(event.currentTarget==this){
			$(".tb-market-footer-list a").css("color","#999");
			$(this).css("color","#30B30E");
		}
	});
});
$(function(){
    var mySwiper = new Swiper ('.tb-market-content-banner .swiper-container', {
	    spaceBetween: 2500,
		direction : 'horizontal',
		centeredSlides: true,
		autoplay: {
            delay: 2500,
            disableOnInteraction: false,
		},
		pagination: {
            el: '.tb-market-content-banner .swiper-pagination',
            clickable: true,
		},
        spaceBetween : 0//slide之间的距离（单位px）
    })
});
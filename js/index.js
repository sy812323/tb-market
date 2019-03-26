$(function(){
    var mySwiper = new Swiper ('.tb-market-content-banner .swiper-container', {
	    spaceBetween: 30,
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
	  var mySwiper2 = new Swiper ('.tb-market-content-nav .swiper-container', {
	    spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		// autoplay: {
		// delay: 2500,
		// disableOnInteraction: false,
		// },
		pagination: {
		el: '.tb-market-content-nav .swiper-pagination',
		clickable: true,
		}
  	})
});
$(function(){
	$(".tb-market-content").scroll(function(){
		let temp = $(".tb-market-content").scrollTop();
		if(Math.ceil(temp)>0&&Math.ceil(temp)<470){
			$(".header-center-address").css({"display":"none"});
			$(".tb-market-content-search").css({"display":"none"});
			$(".header-center-search").css({"display":"block"});
			$("header").css({"background":"white","transition":"background .3s"});
			$(".tb-market-header-right a i,.tb-market-header-left a i").css("color","#5F646E");
			$(".tb-market-content-nav-mini").css("display","none");
		}else if(Math.ceil(temp)>=470){
			$(".header-center-address").css({"display":"none"});
			$(".tb-market-content-search").css({"display":"none"});
			$(".header-center-search").css({"display":"block"});
			$("header").css({"background":"white","transition":"background .3s"});
			$(".tb-market-header-right a i,.tb-market-header-left a i").css("color","#5F646E");
			$(".tb-market-content-nav-mini").css("display","block");
		}else{
			$(".header-center-address").css({"display":"flex"});
			$(".tb-market-content-search").css({"display":"block"});
			$(".header-center-search").css({"display":"none"});
			$("header").css({"background":"0 0","transition":"background .3s"});
			$(".tb-market-header-right a i,.tb-market-header-left a i").css("color","white");
			$(".tb-market-content-nav-mini").css("display","none");
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
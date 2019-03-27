$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
	    spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		// autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
		// },
		pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type:"fraction"
		},
        spaceBetween : 0//slide之间的距离（单位px）
	  })
});
$(function(){
	$(".tb-market-content").scroll(function(){
		let temp = $(".tb-market-content").scrollTop();
		if(Math.ceil(temp)>120){
			$("header").css("background","white");
			$(".tb-market-header-center").css("display","-webkit-flex");
			$(".tb-market-header-left a").css("background-color","white");
			$(".tb-market-header-right a").css("background-color","white");
			$(".tb-market-header-left a i").css("color","#999");
			$(".tb-market-header-right a i").css("color","#999");
		}else{
			$("header").css("background","linear-gradient(rgba(0,0,0,.15),transparent)");
			$(".tb-market-header-center").css("display","none");
			$(".tb-market-header-left a").css("background-color","rgba(0,0,0,.4)");
			$(".tb-market-header-right a").css("background-color","rgba(0,0,0,.4)");
			$(".tb-market-header-left a i").css("color","white");
			$(".tb-market-header-right a i").css("color","white");
		}
	});
});
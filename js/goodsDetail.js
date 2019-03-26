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
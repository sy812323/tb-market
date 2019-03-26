$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
	    spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		},
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		}
  	})
});
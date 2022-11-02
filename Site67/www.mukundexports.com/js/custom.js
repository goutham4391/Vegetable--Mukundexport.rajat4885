// JavaScript Document
jQuery(document).ready(function($) {
	wow = new WOW(
	{
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default 
	  offset:       0          // default
	})
	wow.init();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 35){  
			$('.main-header').addClass("sticky");
			$('.inner-header').css("background","transparent");
		}
		else{
			$('.main-header').removeClass("sticky");
			$('.inner-header').css("background","rgba(0, 0, 0, 0.75)");
		}
	});
});
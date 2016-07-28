$(document).ready(function(){
	var altura = $('.efecto-menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.efecto-menu').addClass('menu-fixed');
		} else {
			$('.efecto-menu').removeClass('menu-fixed');
		}
	});
 
});
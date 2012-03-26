$(document).ready(function() {
	var logo = $('#main-header h1 a').addClass('active');
	$(window).on('scroll', function() {
		if( $(this).scrollTop() > 20){
			logo.removeClass('active');
			$(window).unbind("scroll");
		}
	});

});
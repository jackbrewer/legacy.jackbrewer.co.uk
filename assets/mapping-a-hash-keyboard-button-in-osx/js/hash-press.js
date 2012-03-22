(function(){
	$(document.body).bind('keydown', function(event) {
		if (event.which == 192) {
			event.preventDefault();
			$('#mapping-a-hash-keyboard-button-in-osx header').addClass('keypress');
		}
	});
	$(document.body).bind('keyup', function(event) {
		if (event.which == 192) {
			event.preventDefault();
			$('#mapping-a-hash-keyboard-button-in-osx header').removeClass('keypress');
		}
	});
})();
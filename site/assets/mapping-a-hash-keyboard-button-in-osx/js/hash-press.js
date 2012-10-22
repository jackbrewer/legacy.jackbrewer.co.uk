(function(){
	$(document.body).bind('keydown keyup', function(event) {
		toggleKey();
	});

	function toggleKey() {
		if (event.which === 192) {
			event.preventDefault();
			$('.mapping-a-hash-keyboard-button-in-osx header').toggleClass('keypress');
		}
	}
})();
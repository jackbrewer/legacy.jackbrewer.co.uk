(function(){

	// Display the correct Time on the icon

	var style = document.createElement('style'),
	    head = document.getElementsByTagName('head')[0];

	function setTime() {
		var now = new Date(),
		    hour = now.getHours(),
		    minute = now.getMinutes();
		if (hour < 10) { hour = '0' + hour; }
		if (minute < 10) { minute = '0' + minute; }
		style.innerHTML = '.iphone:after{content:"' + hour + ':' + minute +'"}';
		head.appendChild(style);
		setTimeout(setTime, 1000);
	}

	setTime();

})();
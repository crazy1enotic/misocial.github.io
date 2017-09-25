$(function() {
	var link = $('.m-menu-link');
		close = $('.close-menu');
		menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
});
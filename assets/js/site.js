$(function() {
	$("html").easeScroll();
	// Add scrollspy to <body>
	$('body').scrollspy({ target: '#menu' })
	$("#menu ul li a[href^='#']").on('click', function (e) {
		// prevent default anchor click behavior
		e.preventDefault();
		// store hash
		var hash = this.hash;
		// animate
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500, function () {
			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
		});
	});

	$("#contact_form_netlify").submit(function(e) {
		e.preventDefault();
	  
		var $form = $(this);
		$.post($form.attr("action"), $form.serialize()).then(function() {
			$form.slideUp().next().text("Your message has been successfully sent!");
		});
	});
});
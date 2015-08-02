jQuery(function($) {'use strict',

	// Header Slider
	$(function(){
		$('#headerSlider.carousel').carousel({
			interval: 5000
		});
	});

	//Initiat WOW JS
	new WOW().init();

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

});
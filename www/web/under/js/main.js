$(document).ready(function () {
	function resize() {
		$text_wrapper = $('.text_wrapper');
	    $text_wrapper.css('margin-top', -($text_wrapper.height()/2));

	    $text_wrapper_w = $('.text_wrapper');
	    $text_wrapper_w.css('margin-left', -($text_wrapper_w.width()/2));
	}
	$(window).resize(resize);
	resize();
});

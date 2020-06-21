// Плавающий блок отзыва
	$(function() {
		var el = $(".floating_block");
		var offset = $(".floating_block").offset();
		var topPadding = 20;
		$(window).scroll(function() {
			if ($(window).scrollTop() > offset.top - topPadding) el.css({'position' : 'fixed', 'top' : topPadding+'px'});
			else el.css({'position' : 'static'});			
		});
	});
	
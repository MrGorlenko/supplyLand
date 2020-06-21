// ��������� ������ �������� ������
$(window).load( function(){
	$(function() {
		var el = $(".floating_block");
		el.parent().height( el.outerHeight() );
		var offset = $(".for-floating").offset();
		
		if ($(window).scrollTop() + $(window).height() < offset.top + el.outerHeight() ){
			el.css({
				'position' : 'fixed',
				'bottom' : '0',
				'opacity' : '.7',
				'zIndex' : '7',
				'background' : '#fff'
			});
		}
			
		$(window).scroll(function() {
			if ($(window).scrollTop() + $(window).height() < offset.top + el.outerHeight() ){
				el.css({
					'position' : 'fixed',
					'bottom' : '0',
					'opacity' : '.7',
					'background' : '#fff'
				});
			}
			else{
				el.css({
					'position' : 'static',
					'opacity' : '1',
					'background' : 'none'
				});
			}
		});
	});
});
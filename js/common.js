$(document).ready( function(){
	$('input[placeholder]').placeholder(); //����������� ������������
	
	/* ����������� ������� ��������� ������������� � ������ */
	$("a, .linkimg span, .slider-block-link h3, .catalog-filter .toggle, .close-link").each( function(){
		if( $(this).css("display") == "inline"){
			$(this).wrap("<span></span>")
				.parent()
					.css("fontSize", $(this).css("fontSize") );
			
			var x = 0.7;
			if( $(this).parents("nav").length ) x = 0.6;
			//if( $(this).parents().hasClass("breadcrumbs") ) x = 0.7;
			//if( $(this).parents().hasClass("breadcrumbs") ) x = 0.7;
			
			$(this).css({"lineHeight": "0"}).wrapInner("<span></span>")
				.css("fontSize", 100*x+"%")
				.find("span")
					.css({"fontSize": 100/x+"%", "lineHeight": "inherit"});
		}
	});
	
	$("a").each( function(){
		if( $(this).css("display") == "inline" ) $(this).find("span").css("paddingTop", "3px");
	});
	
	$("a img").parents("a").css("border","0"); // �������� ������������� � ������ � ����������
	
	//������ ��������� ������
	$(".breadcrumbs-container .info-block .center-fix").css({
		paddingTop: $(".breadcrumbs").outerHeight() +"px"		
	});
	
	if( $(".breadcrumbs").outerWidth() > 594 )
		$(".breadcrumbs-container .info-block").css({	width: $(".breadcrumbs").outerWidth() + "px"});
	else
		$(".breadcrumbs-container .info-block").css({	width: "558px"});
	
	//$(".breadcrumbs, .breadcrumbs-container .info-block").each( function(){
	//	$(this).css("left", ( $(this).parent().width() - $(this).outerWidth() )/2 );
	//});
	
	$(".breadcrumbs li:not(:first) a").click( function(){
		bc = $(".breadcrumbs");
		var ids = $(this).attr('ids')
		$(".breadcrumbs-container .info-block").each( function(){
			if($(this).attr('id')!=ids){
				$("#"+$(this).attr('id')).fadeOut(250);
			}else{
				$("#"+ids).fadeToggle(250);
			}
		});
		bc.find(".hover-link").removeClass("hover-link");
		$(this).toggleClass("hover-link");
	});
	/*$(".breadcrumbs li:not(:first) a").click( function(){
		bc = $(".breadcrumbs");
		if( !$(bc).find(".hover-link").length || $(this).hasClass("hover-link") ){
			$(".breadcrumbs-container .info-block").fadeToggle(250);
		}else{
			bc.find(".hover-link").removeClass("hover-link");
		}
		$(this).toggleClass("hover-link");
	});*/
	
	//���������� ������
	$("article tr:odd td").css("background", "#fcfdff");
	
	//����������� ���������
	$(".hint-text").each( function(){
		var hint = $(this).parents(".hint");
		//alert();
		
		$(this).css({
			"top": hint.outerHeight() + 18,
			"left": hint.width()/2 - $(this).outerWidth()/2
		});
	});
	
	$(".hint-button, .i-hint-close").click( function(){
		var hint = $(this).parents(".hint");
		var text = hint.find(".hint-text");
		if( text.is(":hidden") ) hint.css({"backgroundColor": "#EAF1F5"});
		else hint.css({"backgroundColor": "transparent"});
		text.fadeToggle(250);
	});
	
	//�������� select
	$('.select').click(function(){
		$(this).toggleClass("active").parent().find('.options').fadeToggle('fast');
	});
	
	$('.select.active').click(function(){
		$(this).removeClass("active").parent().find('.options').fadeOut('fast');
	});
	/*$('.pseudo-select .select:has(.options:visible)').click(function(){
		$(this).parent().find('.options').fadeOut('fast');
	});*/
	
	/*$('.pseudo-select').mouseleave(function(){
		$(this).find(".options").fadeOut('fast');
		$(this).find(".select").removeClass("active");
	});*/
	
	$(document).click(function(event) {
			
		$(".breadcrumbs-container .info-block .center-fix").each( function(){
			if ( $(event.target).closest(".center-fix").length) return;
			$(".breadcrumbs-container .info-block").fadeOut(250); // ��� ������
			$(".breadcrumbs .hover-link").removeClass("hover-link"); // ��� ������
			event.stopPropagation();
		});
		
		$(".catalog-filter .info-block").each( function(){
			if ( $(event.target).closest(".catalog-filter").length) return;
			$(".catalog-filter .info-block").slideUp(150);
			event.stopPropagation();
		});
		
		$(".hint-text").each( function(){
			if ( $(event.target).closest(".hint-text, .hint-button").length) return;
			$(this).fadeOut(150);
			$(this).parents(".hint").css({"backgroundColor": "transparent"});
			event.stopPropagation();
		});
		
		/*$(".contacts-map .info-block").each( function(){
			if ( $(event.target).closest(".contacts-map .info-block, .contacts-map .open-info-block").length) return;
			$(this).fadeOut(250);
			$(".contacts-map .open-info-block").fadeIn(250);
			event.stopPropagation();
		});*/
		
		$(".options:visible").each( function(){
			if ( $(event.target).closest(".options, .select.active").length) return;
			$(".select").removeClass("active");
			$(this).fadeOut('fast');
			event.stopPropagation();
		});
	});
	
	$('.options > div').click(function(){
		$(this).closest('.pseudo-select').find('.select').removeClass("active").html($(this).html());
		$(this).closest('.pseudo-select').find('input').attr('value', $(this).attr('value'));
		$.each($(this).parent().children('div.check'), function(){
			$(this).removeClass('check');
		});
		$(this).addClass('check');
		$(this).parent().fadeOut('fast');
	});
	
	//Radio & checkbox
	$("label:has(input:checked)").addClass("active");
	//Radio
	$("label:has(input[type=radio])").addClass("radio");
	
	$(".radio").click( function(){
		$(this).parent().find("label").removeClass("active");
		$(this).addClass("active");
	});
	
	//Checkbox
	$("label:has(input[type=checkbox])").addClass("checkbox");
	
	$(".checkbox input").change( function(){
		$(this).parent().toggleClass("active");
	} );
	
	/*$(".checkbox").click( function(){
		$(this).toggleClass("active");
		//$(this).addClass("active");
		event.stopPropagation();
	});
	
	//�������
	//������������� ������� �� ������� ��������
	/*$(".slide-link").hover(
		function(){ $(this).css({width: "110px"}); },
		function(){ $(this).css({width: "0px"}); }
	);*/
	
	$(".main-slider section").hide();
	$(".main-slider section.blue").addClass("active");
	$(".slider-switcher.blue").addClass("active");
	
	$(".main-slider .active").fadeIn(500);
	$(".main-slider .slide-link, .slider-switcher").click( function(){
		if( !$(this).hasClass("active") ){
			$(".main-slider section").fadeOut(500);
			$(".slider-switcher").removeClass("active");
			
			if( $(this).hasClass("pink") ){
				$(".main-slider section.pink").fadeIn(500);
				$(".slider-switcher.pink").addClass("active");
			}
			if( $(this).hasClass("blue") ){
				$(".main-slider section.blue").fadeIn(500);
				$(".slider-switcher.blue").addClass("active");
			}
			if( $(this).hasClass("orange") ){
				$(".main-slider section.orange").fadeIn(500);
				$(".slider-switcher.orange").addClass("active");
			}
		}
	});
	
	var sliderTime = 5000;
	//var animationTimer = setInterval('swapSlides()', sliderTime);
	
	/*$(".main-slider section .grid-width-942, .main-slider .slide-link").hover(
		function(){
			clearInterval(animationTimer);
		},
		function(){
			animationTimer = setInterval('swapSlides()', sliderTime);
		}
	);*/
	
	$(".main-slider .slide-link").hover(
			function(){
				$(this).find(".bg").animate({width: "100%", opacity: "1"}, 250);
			},
			function(){
				$(this).find(".bg").animate({width: "0", opacity: "0"}, 250);
			}
	);
	
	if( $(window).height() - 480 > 400 ){
		$(".v-pos-container").height( $(window).height() - 480 );
		$(".v-slider-container").css({
			position: "relative",
			top: "50%",
			marginTop: "-200px"
		})
	}
	
	if($(window).height()-412 > 500) $(".v-pos-container2").height( $(window).height() - 412 );
	
	
	//��������� �� ������ � ��������
	$(".main-slider .slider-block-link").hover(
		function(){
			$(this).find(".hover-block").show();
			$(this).parent().find(".star").css("backgroundPosition", "-23px 0");
		},
		function(){
			$(this).find(".hover-block").hide();
			$(this).parent().find(".star").css("backgroundPosition", "0 0");
		}
	);
	
	//��������� �� ������-��������
	$(".link-img").append('<div class="link-img-hover"></div>');
	$(".link-img").hover(
		function(){
			$(this).find('.link-img-hover').fadeIn(150);
		},
		function(){
			$(this).find('.link-img-hover').fadeOut(150);
		}
	);
	
	//������ � ��������
	$(".catalog-filter .info-block").css({top: $(".catalog-filter").outerHeight()+"px" });
	$(".catalog-filter .toggle, .catalog-filter .close-link, .catalog-filter .button-big").click( function(){
		var filter = $(this).parents(".catalog-filter");
		var info = filter.find(".info-block");
		var toggle = filter.find(".toggle");
		
		if( info.is(":visible") ) toggle.css("color", "#069");
		else $(this).css("color", "#000");
		info.slideToggle(150);
	});
	
	//�������
	$(".gallery .thumb").hover(
		function(){
			$(this).parents(".gallery").find(".thumb").css("zIndex","1");
			$(this).find(".brightness").fadeTo(150, 0.1);
			$(this).css("zIndex","2").animate({ top: "-10px", left: "-10px", width: "255px", height: "210px" }, 150);
			$(this).find(".text").animate({width: "215px"}, 150);
		},
		function(){
			$(this).find(".brightness").stop(true, true).fadeTo(150, 0);
			$(this).stop(true, true).animate({ top: "0", left: "0", width: "235px", height: "190px" }, 150, function(){ $(this).css("zIndex","1"); } );
			$(this).find(".text").stop(true, true).animate({width: "195px"}, 150);
		}
	);
	
	$(".link-thumb").hover(
		function(){
			$(this).parent().find(".link-thumb").css("zIndex","1");
			$(this).find(".brightness").fadeTo(150, 0.1);
			$(this).css("zIndex","2").animate({ top: "-10px", left: "-10px", width: "242px", height: "200px" }, 150);
			$(this).find(".text").animate({width: "202px"}, 150);
		},
		function(){
			$(this).find(".brightness").stop(true, true).fadeTo(150, 0);
			$(this).stop(true, true).animate({ top: "0", left: "0", width: "222px", height: "180px" }, 150, function(){ $(this).css("zIndex","1"); } );
			$(this).find(".text").stop(true, true).animate({width: "182px"}, 150);
		}
	);
	
	//��������, ���� � �����������
	$(".contacts-map .open-info-block .fading").css("opacity",".6");
	$(".contacts-map .open-info-block").hover(
		function(){
			$(this).find(".fading").animate({opacity: "1"}, 150);
			$(this).find(".i-controls").css("backgroundPosition", "-52px -25px");
		},
		function(){
			$(this).find(".fading").animate({opacity: ".6"}, 150);
			$(this).find(".i-controls").css("backgroundPosition", "-52px 0");
		}
	);
	
	$(".contacts-map .open-info-block").click( function(){
		$(this).fadeOut(250);
		$(".contacts-map .info-block").fadeIn(250);
	});
	
	$(".contacts-map .info-block .i-min").click( function(){
		$(this).parents(".info-block").fadeOut(250);
		$(".contacts-map .open-info-block").fadeIn(250);
	});
	
	$(".contacts-map .open-info-block").click();
		
	//������� �������, �������
	/*$( ".range-change" ).each( function(){
		var rangeMin = 0;
		var rangeMax = 5000;
		var start = $(this).find("input").val();
		
		$(this).find( ".slider" ).slider({
			animate: true,
			range: "min",
			value: start,
			min: rangeMin,
			max: rangeMax,
			step: 1,
		  
			//�������� �������� � ������� ��� �� ��������
			slide: function( event, ui ) {
					$( this ).parents(".range-change").find("input").val( ui.value );
			}//,

			//��������� ������� ���� �����, ��� ��� ����� �������� ������ � ������� �����
			//change: function(event, ui) { 
			//	$('#hidden').attr('value', ui.value);
			//}
		});
		
		$(this).find("input").change(function(){
			var value1= $(this).val();
			
			if(parseInt(value1) < rangeMin){
				value1 = rangeMin;
				$(this).val(value1);
			}
			if(parseInt(value1) > rangeMax){
				value1 = rangeMax;
				$(this).val(value1);
			}
			
			$(this).parents(".range-change").find(".slider").slider( "value",$(this).val() );
		});
	});*/
		
	//�������������� ���������
	$(".cat, .link-container").css("cursor", "pointer");
	$(".cat, .link-container").click( function(){
		var href = $(this).find("a").attr("href");
		window.location = href;
	});
	$(".cat, .link-container").hover(
			function(){
				$(this).find("a").addClass("hover-link");
			},
			function(){
				$(this).find("a").removeClass("hover-link")
			}
	);
	
	//��������� ���� �� ���������
	$(".cat").hover(
		function(){
			$(this).find("h4,h5").addClass("black");
			$(this).addClass("black");
			$(this).find("a").addClass("hover-link");
		},
		function(){
			$(this).find("h4,h5").removeClass("black");
			$(this).removeClass("black");
			$(this).find("a").removeClass("hover-link");
		}
	);
	
	//search
	$(".search input").focus( function(){	$(this).parent().find(".search-btn").css("backgroundPosition", "-24px 0");	});
	$(".search input").blur( function(){	$(this).parent().find(".search-btn").css("backgroundPosition", "0 0");	});
	
	equalHeight($(".equalHeight"));
	
    $('iframe').each(function() {
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
});

function swapSlides() {
	var el = $(".v-slider-container");
	var act = el.find(".slider-switcher.active");
	act.removeClass("active");
	if( act.next(".slider-switcher").length ) act.next(".slider-switcher").click().addClass("active");
	else el.find(".slider-switcher:first").click().addClass("active");
}

function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

$(window).load( function(){
	$("section.blue img").each( function(){
		var width = -$(this).width()/2;
		$(this).css("marginLeft", width+"px");
	});
});
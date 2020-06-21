		/* CAROUSEL */
		
		$(document).ready(function(){
				
			if($(".carousel li").size()>3){
				$(".carousel").jCarouselLite({
					btnNext: ".next",
					btnPrev: ".prev",
					circular: false
				});
			}

			if($(".carousel li").size()<4){
				$(".carousel_wrapper .prev, .carousel_wrapper .next").css('display','none') ;
			}
		});
		
		
		/* HIGHSLIDE */
		langu="";
		hs.graphicsDir = "/js/graphics/";
		hs.outlineType = "rounded-white";
		hs.wrapperClassName = "draggable-header";
		hs.dimmingOpacity = 0.85;
		hs.align = "center";
		
		var orderOptions = {
			contentId: 'order',
			transitions: ['fade'],
			fadeInOut: true,
			dimmingOpacity: 0.85,
			dimmingDuration: 0
		};
		
		var galleryOptions = {
			slideshowGroup: 1,
			outlineType: 'rounded-white',
			wrapperClassName: 'projects_gallery',
			dimmingOpacity: 0.85,
			align: 'center',
			transitions: ['fade'],
			fadeInOut: true,
			marginLeft: 100,
			marginBottom: 0,
			captionEval: 'this.thumb.alt',
			useBox: true,
			width: 558,
			height: 428,
			dimmingDuration: 0
		};
		
		hs.addSlideshow({
			slideshowGroup: 1,
			interval: 5000,
			repeat: false,
			useControls: true,
			overlayOptions: {
				thumbnailId: 'art1gallary',
				className: 'text-controls',
				relativeTo: 'highslide-wrapper',
				offsetY: "50%",
			}/*,
			thumbstrip: {
				thumbnailId: 'art1gallary',
				position: 'bottom center',
				mode: 'horizontal',
				relativeTo: 'highslide-wrapper',
				offsetY: 100
			}*/
		});
		// not dragged
		hs.Expander.prototype.onDrag = function() {
			return false;
		};
		// Keep the position after window resize
		hs.addEventListener(window, 'resize', function() {
			var i, exp;
			hs.page = hs.getPageSize();
			for (i = 0; i < hs.expanders.length; i++) {
				exp = hs.expanders[i];
				if (exp) {
					var x = exp.x,
							y = exp.y;
					// get new thumb positions
					exp.tpos = hs.getPosition(exp.el);
					x.calcThumb();
					y.calcThumb();
					// calculate new popup position
					x.pos = x.tpos - x.cb + x.tb;
					x.scroll = hs.page.scrollLeft;
					x.clientSize = hs.page.width;
					y.pos = y.tpos - y.cb + y.tb;
					y.scroll = hs.page.scrollTop;
					y.clientSize = hs.page.height;
					exp.justify(x, true);
					exp.justify(y, true);
					// set new left and top to wrapper and outline
					exp.moveTo(x.pos, y.pos);
				}
			}
		});
		var ovn=0;
		hs.Expander.prototype.onCreateOverlay=function(){	}
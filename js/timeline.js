	$(function () {
		$("#timeline .owl-carousel").owlCarousel({
			items: 1,
			loop: false,
			autoplay: false,
			/*autoplayTimeout: 1000,
			autoplayHoverPause: false,*/
			nav: false,
			dots: true,
			smartSpeed: 200,
			responsiveClass: true,
			touchDrag: true,
			mouseDrag: false,
		});
	});


 $(document).ready(function(){



        cont=0;
        $('#timeline .item').each(function(){
              
              dtType = $(this).attr('data-type');
              $('#timeline .owl-dot:eq('+cont +')').attr('data-type',dtType);
              $('#timeline .owl-dot:eq('+cont++ +') span').html(dtType);

        });

        $('#timeline .owl-dot').on('click', function(){

              dtType = $(this).attr('data-type');

              if (dtType == "1990" || dtType == "1994" ||  dtType == "1999" || dtType == "2009") {
              		$('#timeline .owl-dots').addClass('black');
              } else {
              		$('#timeline .owl-dots').removeClass('black');
              }
        	
        });


});
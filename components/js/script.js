// JavaScript Document



	
		

 

 

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }); //on resize

  




     $(".carousel").carousel({

         interval : 4500,
         pause: 'false'
		 
     });



var wheight = $(window).height();

$ ('.fullheight, .fullheightEvent ').css('height', wheight);

// replace img inside carousel with a bg image

$ ('#carousel-example-generic .item img').each(function() {
	var imgSrc = $(this).attr('src');
	$(this).parent().css({'background-image': 'url('+imgSrc+')'});
	$(this).remove();
});

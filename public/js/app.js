$(document).ready(function() {



$.fn.vAlign = function() {
  return this.each(function(){
  var ah = $(this).innerHeight();
  var ph = $(this).parent().innerHeight();
  var mh = Math.ceil(ph-ah) / 5;

  //console.log('ah: ' + ah + ', ph: ' + ph + ', mh: ' + mh);
  
  if ( $("#navigation").css("width") > "480px") {
    $(this).animate({'margin-top': mh}, 10);
  } else {
    $(this).animate({'margin-top': 0}, 10);
  }
 


  });
};

// var centerText = (function(){
//   $('ul.slides').each(function(){ 
//     $(this).find('div.infotext').first().vAlign(1, 1).fadeIn(1200);
//   }); 
// })();




















    $('#centeredmenu ul li').has('ul').hover(function(){


        $(this).find('ul').hide().slideDown(200);


    }, function(e){

      if ( $("#navigation").css("width") > "480px") {
        $(this).find('ul').slideUp(200);
      } else {
        $(this).find('ul').hide();
      }

    });

    





    $('.flexslider').flexslider({

      animation: "slide",
      slideDirection: "horizontal",
      slideshow: false,
    	directionNav: false,
			controlNav: true,
      keyboardNav: true,
			slideshowSpeed: 7000,          
			animationDuration: 700,
			controlsContainer: ".flex-container",
      prevText: "<",       
      nextText: ">", 
      start: function(slider){
        $(slider).find('div.text-anim-1').vAlign().hide().fadeIn(1000);
      },
      before: function(slider){            
        $(slider).find('div.text-anim-1').stop().css({ opacity: '0' }).delay(700).animate({   
          opacity: '1'
        }, 600);
      },
      after: function(slider){
      }
    });

 







   $('.photogrid img').hover(function(){
      $(this).animate({ opacity: '.4'}, 200);
    }, function(){
      $(this).animate({ opacity: '1'}, 200);
    });

























});
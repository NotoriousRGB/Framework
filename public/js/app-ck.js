$(document).ready(function(){$.fn.vAlign=function(a,b){return this.each(function(){var c=$(this).outerHeight(),d=$(this).parent().height(),e=Math.floor(d-c)*.5*a/b;$("#navigation").css("width")>"480px"?$(this).animate({"margin-top":e},10):$(this).animate({"margin-top":0},10)})};var a=function(){$("ul.slides").each(function(){$(this).find("div.infotext").first().vAlign(1.5,3).fadeIn(1200)})}();$("#centeredmenu ul li").has("ul").hover(function(){$(this).find("ul").hide().slideDown(200)},function(a){$("#navigation").css("width")>"480px"?$(this).find("ul").slideUp(200):$(this).find("ul").hide()});$(".flexslider").flexslider({animation:"slide",slideDirection:"horizontal",slideshow:!1,directionNav:!1,controlNav:!0,keyboardNav:!0,slideshowSpeed:7e3,animationDuration:700,controlsContainer:".flex-container",prevText:"<",nextText:">",start:function(a){},before:function(a){$(a).find("div.text-anim-1").stop().vAlign(1,1).css({opacity:"0"}).delay(700).animate({opacity:"1"},600)},after:function(a){}});$(".photogrid img").hover(function(){$(this).animate({opacity:".4"},200)},function(){$(this).animate({opacity:"1"},200)})});
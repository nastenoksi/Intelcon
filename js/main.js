$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: true,
	    navText: ['<img src="svg/left.svg">', '<img src="svg/right.svg">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('.contributor-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: true,
	    navText: ['<img src="svg/left.svg">', '<img src="svg/right.svg">'],
	    // startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


	  

	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  // Кнопка "наверх"

  var btn = $('.scroll-to-top');

  $(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });

  btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '200');
  });



   // Меню-гамбургер

  $('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('show');
  });

  if (  $(window).width()  <  1440) {
    $('.menu ul li a').click(function(e) {
      e.preventDefault();
      $('.menu').toggleClass('show');
	});
	
  }; 
  
 
 
  // Плавная прокрутка

  $("a.menu__item__link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 400);
    return false;
  });


   // Popup-окно

   $('.popup_open').click(function () { 
	$('.popup').addClass('show');
	return false;
});

$('.popup__close').click(function () { 
	$('.popup').removeClass('show');
   return false;
});

$('.popup__overlay').click(function () { 
	$('.popup').removeClass('show');
	return false;
});
	


  //Маска телефона

  $('.phone_number').mask('+7 (999) 999-99-99')



});
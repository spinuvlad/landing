

//Pentru menu garmoshka
$(function(){
	$('.menuToggle').on('click', function(){
			$('.menu-top').slideToggle(300, function(){
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
	});

//https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
$('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    navText: ["<img src='../img/arrow-prev.png'>", "<img src='../img/arrow-next.png'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

$('.slider-2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    navText: [""],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
});

});


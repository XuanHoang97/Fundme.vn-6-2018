$(document).ready(function (){
            $('[data-toggle="popover"]').popover();
        });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
  $('.menu-list li , .sub-menu li ').click(function(){
    $('.menu-list li.active, .sub-menu li.active').removeClass("active");
    $(this).addClass("active");
});
 $('.nav-tabs li').click(function(){
    $('.nav-tabs li').removeClass("active1");
    $(this).addClass("active1");
});

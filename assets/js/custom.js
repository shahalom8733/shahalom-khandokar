 jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.click-menu').click(function(){
            $('.hide-menu').show();
            $('.click-close').show();
        })
        $('.click-close').click(function(){
            $('.hide-menu').hide();
            $(this).hide();
        })

    });

$('.owl-conent').owlCarousel({
    loop:true,
    margin:60,

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:false,
            loop:false,
            dots:true,
        }
    }
})
$('.jquery').owlCarousel({
    loop:true,
    margin:60,

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true,
            dots:true,
        }
    }
})
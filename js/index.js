
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});
 // slide-up script
 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

$("#video_projects .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 1
       },
       600: {
           items: 2
       },
       1000 : {
           items: 3
       }
   }
});

$("#LIZ .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 3
       },
       600: {
           items: 5
       },
       1000 : {
           items: 7
       }
   }
});

const changePic = (e)=>{
    document.getElementById("main_image").src = e;
}

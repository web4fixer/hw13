$(document).ready(function(){
  $('.team-carousel').slick({
    autoplay:true,
    autospeed:900,
    prevArrow:'<i class="fas fa-angle-left left-arrow"></i>', 
    nextArrow:'<i class="fas fa-angle-right right-arrow"></i>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false
  });
});
		
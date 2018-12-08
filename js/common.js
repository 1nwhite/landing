(function($){
  function getGridSize() {
    return (window.innerWidth < 600) ? 1 :
           (window.innerWidth < 900) ? 3 : 4;
           // (window.innerWidth < 1200) ? 5 : 6;
  }
  var $window = $(window),
      flexslider = { vars:{} };
  $(document).ready(function(){
          $('.flexslider').flexslider({
            animation: "slide",
            // animationLoop: true,
            // mousewheel: true,
            itemWidth: 210,
            // animation: 'fade',
            itemMargin: 5,
            controlNav: false,
            customDirectionNav: "",
            directionNav: "",
            // pauseOnHover: true,
            touch: true,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
          });
          $('.slider__button-left').on('click', function(){
              $('.flexslider').flexslider('prev');
              return false;
          })

          $('.slider__button-right').on('click', function(){
              $('.flexslider').flexslider('next');
              return false;
          })
          $window.resize(function() {
             var gridSize = getGridSize();

             flexslider.vars.minItems = gridSize;
             flexslider.vars.maxItems = gridSize;
          });

        // Fancybox
        $('.shakers__link').fancybox();

        // Actvie__btn
        $('.menu__btn').on('click',function(e){
          e.preventDefault;
          $(this).toggleClass('menu__btn-active');
          $('.menu__list').toggleClass('menu-active')
        });

        // Header Scroll
        $(window).scroll(function ()  {
          if ($(this).scrollTop() > 1) {
            $('header').addClass('fixed');
          } else {
              $('header').removeClass('fixed');
          }
        });

        // Page Scroll
        $(".menu__list").on("click","a", function (e) {
           e.preventDefault(e)
           var id  = $(this).attr('href');
           var top = $(id).offset().top;
           $('body, html').animate({
             scrollTop: $(id).offset().top-70
           }, 600);
        });

        // Waypoints
        $(window).scroll(function(){
          $('.about-content__btn').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 865) {
                $(this).addClass('animated flipInX');
            }
          });
        });

 });
})(jQuery);

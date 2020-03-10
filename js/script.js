$(document).ready(function(){

  $(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideDown();
    });


    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideUp();
    });

    $(".search-icon.fa.fa-search").click(function(){
          $(".search-display").slideToggle();
          $(this).toggleClass('fa-search fa-times')
      });
      
      
      $(".ngao-minute1").click(function(){
          $(".ngao-minute").slideToggle();
          
      });
      
       $(".fa-times").click(function(){
          $(".ngao-minute").slideUp();
          
      });
      
      $('.active-ngao').click(function() {
        $(this).toggleClass("active");
    });
      
      
      $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});
      
      

    


  $('.skin-minimal input').iCheck({
    checkboxClass: 'icheckbox_minimal',
    radioClass: 'iradio_minimal',
    increaseArea: '20%'
  });


//   $(function() {
//     var Accordion = function(el, multiple) {
//         this.el = el || {};
//         this.multiple = multiple || false;

//         // Variables privadas
//         var links = this.el.find('.link');
//         // Evento
//         links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
//     }

//     Accordion.prototype.dropdown = function(e) {
//         var $el = e.data.el;
//         $this = $(this),
//             $next = $this.next();

//         $next.slideToggle();
//         $this.parent().toggleClass('open');

//         if (!e.data.multiple) {
//             $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//         };
//     }

//     var accordion = new Accordion($('#accordion'), false);
// });






});

$("#owl-demo").owlCarousel({

      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option

      });


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


$(function() {
var Accordion = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;

  // Variables privadas
  var links = this.el.find('.link3');
  // Evento
  links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
      $next = $this.next();

  $next.slideToggle();
  $this.parent().toggleClass('open');

  if (!e.data.multiple) {
      $el.find('.submenu3').not($next).slideUp().parent().removeClass('open');
  };
}

var accordion = new Accordion($('#accordion'), false);
});

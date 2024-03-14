$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");

});


const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


  $(document).ready(function() {
    $(".date").pDatepicker({
      initialValue:true,
      observer: true,
    format: 'YYYY/MM/DD',
    altField: '.observer-example-alt'
    });

    
});



 //datepicker without txt 

 $(document).ready(function() {
  $(".date-none-txt").pDatepicker({
    initialValue:false,
    observer: true,
    format: 'YYYY/MM/DD',
    altField: '.observer-example-alt'
  });

  
});





// $('ul li a').click(function () {
//   $('a').removeClass('activemenu')
//   $(this).children('a').addClass('activemenu')

// })



// license tab
$(function () {
  $('ul#tabs-link>li>a').click(function () {
      $('a.active').removeClass('active')
      $(this).addClass('active');

      $('.content:visible').hide();

      let selector    =   $(this).attr('href');
      $(selector).fadeIn(200)
  });

 
})

  
//tree view
$(document).ready(function () {
  var treeFolder = $(".folder");
  treeFolder.on("click", function () {
      $(this).parent().find("ul:first").slideToggle();
  })
});

// Just for centering elements:

// Centring function:
jQuery.fn.center = function () {
  this.css("position", "absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
      $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
      $(window).scrollLeft()) + "px");
  return this;
}


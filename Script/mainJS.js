$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");

});


const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


  $(document).ready(function() {
    $(".date").pDatepicker();

	
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

  
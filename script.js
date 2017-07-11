
$('.arrow').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#about-me').offset().top
  }, 800)
})

$('#nav-icon, .nav-link').click(function(){
	$('#nav-icon').toggleClass('open');
  $('.nav-menu').toggleClass('hidden')
});

$(document).on('scroll', function () {
  let currScrollPos = $(document).scrollTop();
  $('.intro').css('background-position', '0' + -currScrollPos/4 + 'px')
});




// $('.intro').mousemove(function(e) {
//     var x = (e.pageX * -1 / 60), y = (e.pageY * -1 / 60);
//     $(this).css('background-position', x + 'px ' + y + 'px');
// });



$('#home, #nav-icon').addClass('is-loading');

$(window).on("load", function () {
		window.setTimeout(function() {
			$('#home, #nav-icon').removeClass('is-loading');
		}, 500);

  $('.arrow').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#about-me').offset().top
    }, 800)
  })
})



$('#nav-icon, .nav-link').click(function(){
	$('#nav-icon').toggleClass('open');
  $('.nav-menu').toggleClass('hidden')
});



// $('.intro').mousemove(function(e) {
//     var x = (e.pageX * -1 / 60), y = (e.pageY * -1 / 60);
//     $(this).css('background-position', x + 'px ' + y + 'px');
// });

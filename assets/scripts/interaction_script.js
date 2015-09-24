$(document).ready(function(){

	$('.site-password-input').keyup(function(){
		$('#submitButton').removeClass('hide');
		$('#submitButton').addClass('show');
	});
	$('#submitButton').click(function(e){
		e.preventDefault();
		$(this).removeClass('show');
		$(this).addClass('hide');
		$('#mainLinkList').removeClass('hide');
		$('#mainLinkList').addClass('show');

		$('#submitInput').removeClass('show');
		$('#submitInput').addClass('hide');
	});
	/////////////// NAV PAGE OPEN/CLOSE //////////////

  $("#navOpen").click(function(e) {
    var $SCM = $('#siteContactMenu');
    e.stopPropagation();
    
    if($SCM.hasClass('open')) {
      $SCM.removeClass('open');
      $(this).removeClass('close');
      // $('body').css('overflow', 'auto');
      $('.container').css('position', 'initial');
    } else {
      $SCM.addClass('open');
      $(this).addClass('close');
      // $('body').css('overflow', 'hidden');
      $('.container').css('position', 'fixed');
    }

  });
  $("#infoLink").click(function(e) {
    var $SAM = $('#siteAboutModal');
    e.preventDefault();
    e.stopPropagation();

    $SAM.addClass('open');
    $('.container').css('position', 'fixed');
  });
  $("#contactInfoLink").click(function(e) {
    var $SAM = $('#siteAboutModal');
    e.preventDefault();
    e.stopPropagation();

    $SAM.addClass('open');
    $('.container').css('position', 'fixed');
  });
  $("#infoBackButton").click(function(e){
  	var $SAM = $('#siteAboutModal');
    e.preventDefault();
    e.stopPropagation();

    $SAM.removeClass('open');
    $('.container').css('position', 'initial');
  });
});
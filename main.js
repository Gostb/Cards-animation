$(document).ready(function(){
	$('.card-content').click(function(){
		if ($(this).find('.card').hasClass('flip')) {
			$(this).find('.card').removeClass('flip');

		} else {
			$(this).find('.card').addClass('flip');
		}
	});


	$(function(){

		$('.draggable').draggable();
	});


});

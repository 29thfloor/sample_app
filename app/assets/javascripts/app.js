$(function(){
	var limit = 140;
	var char_count;

	$('#new_micropost textarea').keyup(function(){
		checkCharCount();
	});
	
	function checkCharCount(){
		char_count = $('#new_micropost textarea').val().length;
		char_count_display = limit - char_count;
	  $(".characters .count").text(char_count_display);
	  if(char_count_display < 0) {
	  	$(".characters .count").css('color', 'red');
	  }
	}

	checkCharCount();

});
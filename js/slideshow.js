// main js
$(document).ready(function(){
	var numslides = 4;
	$('a.prev').click(function(){
		console.log("prev");
		$('.slideshow ul').css("left", "-25%");
	});
	$('a.next').click(function(){
		console.log("next");
	});
});
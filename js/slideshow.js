// main js
$(document).ready(function(){
	// get number of slides
	// var numslides = $('.slideshow ul').children('li').length;
	var numSlides = $('.slideshow>ul>li').length;
	var currentSlideNum = 1;
	var currentSlide = $('.slideshow>ul>li:nth-child('+ currentSlideNum +')').addClass('active');
	var nextSlide;

	console.log("numslides: " + numSlides);
	console.log("currentSlideNum: " + currentSlideNum);
	$('a.prev').click(function(){
		console.log("prev");
		var nextSlideNum;
		console.log("currentSlideNum: " + currentSlideNum);
		if((currentSlideNum - 1) == 0)
		{
			console.log("move back to slide end of slide show [numSlides]");
			nextSlideNum = numSlides;
			//do animation here
			currentSlideNum = numSlides;
			console.log("currentSlideNum: " + currentSlideNum);
		}
		else{
			console.log("move to next slide");
			nextSlideNum = currentSlideNum - 1;
			//do animation here
			currentSlideNum--;
			console.log("currentSlideNum: " + currentSlideNum);
		}
	});

	$('a.next').click(function(){
		var nextSlideNum;
		console.log("next");
		console.log("currentSlideNum: " + currentSlideNum);
		if((currentSlideNum + 1) > numSlides)
		{
			console.log("move back to slide 1");
			nextSlideNum = 1;
			//do animation here
			currentSlideNum = 1;
			console.log("currentSlideNum: " + currentSlideNum);
		}
		else{
			console.log("move to next slide");
			nextSlideNum = currentSlideNum + 1;
			nextSlide = $('.slideshow>ul>li:nth-child('+ nextSlideNum +')').addClass('active');
			//do animation here
			$(nextSlide).css("left", "100%");
			$(currentSlide).animate({
				"left": 0,
				"left": "-100%"},
				"slow", function() {
				/* stuff to do after animation is complete */
			});

			$(nextSlide).animate({
				"left": "100%",
				"left": 0},
				"slow", function() {
				/* stuff to do after animation is complete */
			});
			//end animation
			currentSlideNum++;
			console.log("currentSlideNum: " + currentSlideNum);
		}
	});
});
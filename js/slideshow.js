// main js
$(document).ready(function(){
	// INITIALIZE
	// get number of slides
	var numSlides = $('.slideshow>ul>li').length; 	// calculate lenght based on length of slide list
	var currentSlideNum = 1;  						// set starting slide here
	var nextSlideNum;                               // initialize next slide num to 

	// set the current slide to be active which raises to z-index for visibility in the css
	$('.slideshow>ul>li:nth-child('+ currentSlideNum +')').addClass('active');

	// ANIMATION FUNCTION
	function slideAnimate(currSlideNum, nxtSlideNum, direction){
		// get the current and next slides in the DOM
		var currSlide = $('.slideshow>ul>li:nth-child('+ currSlideNum +')');
		var nxtSlide = $('.slideshow>ul>li:nth-child('+ nxtSlideNum +')').addClass('active');
		
		if(direction === "next"){
			$(nxtSlide).css("left", "100%"); // move the next slide off screen to the right
			$(currSlide).animate({
				left: "-100%"},              // animate current slide off scrrent to the left
				"slow", function() {
					$(currSlide).removeClass('active'); 
			});
		}

		if(direction === "prev"){
			$(nxtSlide).css("left", "-100%");
			$(currSlide).animate({
				left: "100%"},
				"slow", function() {
					$(currSlide).removeClass('active');
			});
		}

		$(nxtSlide).animate({left: 0}, "slow");  // animate next slide on screen from the right or left depending on direction
	}

	// PREV BUTTON
	$('a.prev').click(function(){
		var direction = "prev";
		if((currentSlideNum - 1) == 0)
		{
			// move to last slide if current slide is first slide
			nextSlideNum = numSlides;
			slideAnimate(currentSlideNum, nextSlideNum, direction);
			currentSlideNum = numSlides;
		}
		else{
			// go to prev slide
			nextSlideNum = currentSlideNum - 1;
			slideAnimate(currentSlideNum, nextSlideNum, direction);
			currentSlideNum--;
		}
	});


	// NEXT BUTTON
	$('a.next').click(function(){
		var direction = "next";
		if((currentSlideNum + 1) > numSlides)
		{
			// move back to slide 1 if at end of slideshow
			nextSlideNum = 1;
			slideAnimate(currentSlideNum, nextSlideNum, direction);
			currentSlideNum = 1;
		}
		else{

			nextSlideNum = currentSlideNum + 1;
			slideAnimate(currentSlideNum, nextSlideNum, direction);
			currentSlideNum++;
		}
	});
});